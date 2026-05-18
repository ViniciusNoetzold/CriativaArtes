"use client";

import { forwardRef, useCallback, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Flip from 'gsap/Flip';

gsap.registerPlugin(Flip);

export const FlipRevealItem = ({ flipKey, ...props }) => <div data-flip={flipKey} {...props} />;

export const FlipReveal = forwardRef(function FlipReveal(
  { keys, hideClass = '', showClass = '', ...props },
  forwardedRef,
) {
  const wrapperRef = useRef(null);
  const keySignature = keys.join('|');
  const setRefs = useCallback(
    (node) => {
      wrapperRef.current = node;

      if (typeof forwardedRef === 'function') {
        forwardedRef(node);
      } else if (forwardedRef) {
        forwardedRef.current = node;
      }
    },
    [forwardedRef],
  );

  useGSAP(
    () => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const items = gsap.utils.toArray('[data-flip]', wrapper);
      const isShow = (key) => !!key && (keys.includes('all') || keys.includes(key));
      const setClass = (item) => {
        const key = item.getAttribute('data-flip');

        if (isShow(key)) {
          if (showClass) item.classList.add(showClass);
          if (hideClass) item.classList.remove(hideClass);
        } else {
          if (showClass) item.classList.remove(showClass);
          if (hideClass) item.classList.add(hideClass);
        }
      };

      if (!items.length) return;

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        items.forEach(setClass);
        return;
      }

      const state = Flip.getState(items);
      items.forEach(setClass);

      Flip.from(state, {
        absolute: true,
        duration: 0.48,
        ease: 'power2.out',
        nested: true,
        prune: true,
        scale: true,
        stagger: {
          amount: 0.12,
          from: 'start',
        },
        onEnter: (elements) =>
          gsap.fromTo(
            elements,
            { opacity: 0, scale: 0.97, y: 10 },
            { opacity: 1, scale: 1, y: 0, duration: 0.36, ease: 'power2.out' },
          ),
        onLeave: (elements) =>
          gsap.to(elements, {
            opacity: 0,
            scale: 0.97,
            y: 8,
            duration: 0.28,
            ease: 'power1.in',
          }),
      });
    },
    { scope: wrapperRef, dependencies: [keySignature, showClass, hideClass] },
  );

  return <div {...props} ref={setRefs} />;
});
