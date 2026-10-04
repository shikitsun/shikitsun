"use client";

import { useEffect } from "react";

export default function RegisterElements() {
  useEffect(() => {
    import("./chighlight").then((m) => {
      if (!customElements.get("c-h")) {
        customElements.define("c-h", m.CHighlighComponent);
      }
    });
  }, []);

  return null;
}
