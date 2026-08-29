type VbpxFn = ((...args: unknown[]) => void) & {
  queue?: unknown[];
  process?: (...args: unknown[]) => void;
};

declare global {
  interface Window {
    vbpx?: VbpxFn;
  }
}

export {};
