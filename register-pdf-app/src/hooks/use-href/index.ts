import { useEffect, useState } from "react";

import { PAGE_ECC } from "../../constants";

export function useHref() {
  const [href, setHref] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.location.pathname
          .toLocaleLowerCase()
          .includes(PAGE_ECC.toLowerCase())
      ) {
        setHref(PAGE_ECC.replace(/[^\w\s]/g, ""));
      }
    }
  }, []);

  return { href };
}
