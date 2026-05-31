"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";
import { useCoarsePointer } from "./useCoarsePointer";

type HomeLenisProviderProps = {
  children: ReactNode;
  enabled?: boolean;
};

export default function HomeLenisProvider({
  children,
  enabled = true,
}: HomeLenisProviderProps) {
  const isCoarsePointer = useCoarsePointer();

  if (!enabled || isCoarsePointer) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
        touchMultiplier: 1.15,
      }}
    >
      {children}
    </ReactLenis>
  );
}
