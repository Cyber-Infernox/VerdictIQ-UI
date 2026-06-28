// components/ScrollToHash.tsx
"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    if (window.location.hash === "#predict") {
      const el = document.getElementById("predict");
      if (el) {
        // Small delay ensures layout has settled before scrolling
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100);
      }
    }
  }, []);

  return null;
}
