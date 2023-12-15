import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [screenSize, setScreenSize] = useState(null);
  useEffect(() => {
    setScreenSize(window.innerWidth);
    window.addEventListener("resize", () => {
      setScreenSize(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenSize(window.innerWidth);
      });
    };
  }, []);
  return screenSize <= 450;
}
