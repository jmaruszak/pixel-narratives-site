"use client";

import { useSyncExternalStore } from "react";

const COARSE_POINTER_QUERY = "(pointer: coarse)";
const MOBILE_WIDTH_QUERY = "(max-width: 768px)";

function subscribe(callback: () => void) {
  const coarse = window.matchMedia(COARSE_POINTER_QUERY);
  const mobile = window.matchMedia(MOBILE_WIDTH_QUERY);
  coarse.addEventListener("change", callback);
  mobile.addEventListener("change", callback);
  return () => {
    coarse.removeEventListener("change", callback);
    mobile.removeEventListener("change", callback);
  };
}

function getSnapshot() {
  return (
    window.matchMedia(COARSE_POINTER_QUERY).matches ||
    window.matchMedia(MOBILE_WIDTH_QUERY).matches
  );
}

function getServerSnapshot() {
  return false;
}

export function useCoarsePointer() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
