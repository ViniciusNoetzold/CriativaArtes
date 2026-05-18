import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const getVisibleItem = (track) => Array.from(track.children).find((child) => child.offsetParent !== null);

const getScrollStep = (track) => {
  const item = getVisibleItem(track);
  const styles = window.getComputedStyle(track);
  const gap = Number.parseFloat(styles.columnGap || styles.gap || '0') || 0;

  return (item?.getBoundingClientRect().width || track.clientWidth * 0.84) + gap;
};

export default function useAutoCarousel({
  enabled = true,
  breakpoint = '(max-width: 640px)',
  interval = 3600,
  resetKey = '',
} = {}) {
  const trackRef = useRef(null);
  const isPausedRef = useRef(false);
  const dragRef = useRef({
    isPointerDown: false,
    isDragging: false,
    pointerId: null,
    startScrollLeft: 0,
    startX: 0,
    startY: 0,
  });
  const [matchesBreakpoint, setMatchesBreakpoint] = useState(false);

  const isActive = enabled && matchesBreakpoint;

  useEffect(() => {
    const media = window.matchMedia(breakpoint);
    const sync = () => setMatchesBreakpoint(media.matches);

    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, [breakpoint]);

  const pauseAutoScroll = useCallback(() => {
    isPausedRef.current = true;
  }, []);

  const scrollByStep = useCallback(
    (direction = 1, manual = true) => {
      const track = trackRef.current;
      if (!track) return;

      if (manual) pauseAutoScroll();

      const maxScrollLeft = track.scrollWidth - track.clientWidth;
      if (maxScrollLeft <= 2) return;

      const step = getScrollStep(track);
      const nextLeft = track.scrollLeft + step * direction;

      if (direction > 0 && nextLeft >= maxScrollLeft - 2) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
        return;
      }

      if (direction < 0 && nextLeft <= 2) {
        track.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
        return;
      }

      track.scrollTo({ left: nextLeft, behavior: 'smooth' });
    },
    [pauseAutoScroll],
  );

  useEffect(() => {
    isPausedRef.current = false;

    const track = trackRef.current;
    if (track) {
      track.scrollTo({ left: 0, behavior: 'auto' });
    }
  }, [isActive, resetKey]);

  useEffect(() => {
    if (!isActive || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      if (!isPausedRef.current) {
        scrollByStep(1, false);
      }
    }, interval);

    return () => window.clearInterval(timer);
  }, [interval, isActive, resetKey, scrollByStep]);

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollByStep(1);
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollByStep(-1);
      }
    },
    [scrollByStep],
  );

  const handlePointerDown = useCallback(
    (event) => {
      const track = trackRef.current;
      if (!isActive || !track) return;
      if (event.pointerType === 'mouse' && event.button !== 0) return;

      pauseAutoScroll();
      dragRef.current = {
        isPointerDown: true,
        isDragging: false,
        pointerId: event.pointerId,
        startScrollLeft: track.scrollLeft,
        startX: event.clientX,
        startY: event.clientY,
      };
    },
    [isActive, pauseAutoScroll],
  );

  const handlePointerMove = useCallback((event) => {
    const track = trackRef.current;
    const drag = dragRef.current;
    if (!track || !drag.isPointerDown) return;

    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;
    const absX = Math.abs(deltaX);
    const absY = Math.abs(deltaY);

    if (!drag.isDragging) {
      if (absX < 8 && absY < 8) return;

      if (absY > absX * 1.15) {
        dragRef.current.isPointerDown = false;
        return;
      }

      dragRef.current.isDragging = true;
      track.setPointerCapture?.(event.pointerId);
    }

    event.preventDefault();
    track.scrollLeft = drag.startScrollLeft - deltaX;
  }, []);

  const handlePointerEnd = useCallback((event) => {
    const track = trackRef.current;
    const drag = dragRef.current;

    if (track && drag.isDragging && drag.pointerId !== null) {
      track.releasePointerCapture?.(event.pointerId);
    }

    dragRef.current = {
      isPointerDown: false,
      isDragging: false,
      pointerId: null,
      startScrollLeft: 0,
      startX: 0,
      startY: 0,
    };
  }, []);

  const trackProps = useMemo(
    () => ({
      ref: trackRef,
      onKeyDown: handleKeyDown,
      onPointerCancel: handlePointerEnd,
      onPointerDown: handlePointerDown,
      onPointerLeave: handlePointerEnd,
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerEnd,
      onTouchStart: pauseAutoScroll,
      onWheel: pauseAutoScroll,
      tabIndex: isActive ? 0 : undefined,
    }),
    [handleKeyDown, handlePointerDown, handlePointerEnd, handlePointerMove, isActive, pauseAutoScroll],
  );

  return {
    isActive,
    pauseAutoScroll,
    scrollNext: () => scrollByStep(1),
    scrollPrevious: () => scrollByStep(-1),
    trackProps,
    trackRef,
  };
}
