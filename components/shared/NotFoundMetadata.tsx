"use client";

import { useEffect } from "react";

export function NotFoundMetadata() {
  useEffect(() => {
    document.title = "Page Not Found | Future Logix";

    let description = document.querySelector('meta[name="description"]');

    if (!description) {
      description = document.createElement("meta");
      description.setAttribute("name", "description");
      document.head.appendChild(description);
    }

    description.setAttribute(
      "content",
      "The page you are looking for does not exist. Return to Future Logix homepage."
    );
  }, []);

  return null;
}
