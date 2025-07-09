"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Nav from "./_components/Nav";

export default function Component() {
  const [scale, setScale] = useState(1);
  const [isZoomMode, setIsZoomMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const router = useRouter();

  useEffect(() => {
    let currentScale = 1;

    const updateAll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const maxScroll = windowHeight * 2;
      const activationPoint = windowHeight * 1.5; // Activate at 150vh instead of 200vh

      setScrollY(currentScrollY);

      // Check if we should be in zoom mode
      const shouldBeZoomMode = currentScrollY >= activationPoint;

      if (shouldBeZoomMode !== isZoomMode) {
        setIsZoomMode(shouldBeZoomMode);
        if (!shouldBeZoomMode) {
          currentScale = 1;
          setScale(1);
        }
      }

      // Lock scroll at max
      if (currentScrollY >= maxScroll) {
        window.scrollTo(0, maxScroll);
      }
    };

    const handleScroll = () => {
      updateAll();
    };

    const handleWheel = (e: WheelEvent) => {
      updateAll(); // Update state first

      if (window.scrollY >= window.innerHeight * 1.5) {
        // Direct check instead of relying on state
        e.preventDefault();

        const zoomSpeed = 0.004;
        currentScale += e.deltaY * zoomSpeed;
        currentScale = Math.max(1, Math.min(currentScale, 8));

        setScale(currentScale);
        if (currentScale == 8) {
          //   console.log("redirecting");
          router.push("/story");
        }
        console.log("Zooming:", currentScale);
      }
    };

    // Initial update
    updateAll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [isZoomMode]);

  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 539;
  const activationPoint = windowHeight * 1.5;
  const progress = Math.min((scrollY / activationPoint) * 100, 100);

  return (
    <div className="relative">
      {/* Enhanced debug info */}

      {/* Scrollable content */}
      <div style={{ height: "300vh", width: "100%" }}>
        <div
          style={{
            height: "250vh",
            width: "100vw",
            backgroundImage: "url('/bg_image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "sticky",
            top: 0,
            zIndex: 1,
          }}
        />
      </div>

      {/* Zoom overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "url('/bg_image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
          zIndex: isZoomMode ? 10 : -1,
          opacity: isZoomMode ? 1 : 0,
        }}
      />

      {/* Content */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Nav />
        {/* <div className="h-screen flex items-center justify-center">
         */}
        <div className="flex items-center justify-center pt-16 px-4 min-h-[calc(100vh-80px)]">
          {/* <div> */}
          {/* </div> */}
          <div className=" p-8 rounded-lg text-white text-center max-w-md">
            <h1 className="text-white text-[250px] pb-4 font-megarok flex justify-center">
              OBSCURA
            </h1>
            <div className="flex flex-row font-megarok justify-center items-center text-8xl space-x-2">
              <div className="flex items-center flex-col">
                <div>2</div>
                <p>days</p>
              </div>
              <img src="/hourglass.png" className="w-24" />
              <div className="flex items-center flex-col">
                <div>24</div>
                <p>hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
