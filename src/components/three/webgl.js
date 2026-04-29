let cachedSupport;
let probeContext;

export function canUseWebGL() {
  if (typeof window === 'undefined') {
    return false;
  }

  if (cachedSupport !== undefined) {
    return cachedSupport;
  }

  const canvas = document.createElement('canvas');

  try {
    probeContext =
      canvas.getContext('webgl2', { powerPreference: 'low-power' }) ||
      canvas.getContext('webgl', { powerPreference: 'low-power' }) ||
      canvas.getContext('experimental-webgl');

    cachedSupport = Boolean(probeContext);
  } catch {
    cachedSupport = false;
  }

  return cachedSupport;
}
