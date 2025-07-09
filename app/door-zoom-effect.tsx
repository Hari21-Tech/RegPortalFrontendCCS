"use client";

import { useEffect, useState } from "react";

export default function Component() {
  const [scale, setScale] = useState(1);
  const [isZoomMode, setIsZoomMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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

        const zoomSpeed = 0.008;
        currentScale += e.deltaY * zoomSpeed;
        currentScale = Math.max(1, Math.min(currentScale, 8));

        setScale(currentScale);
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
      <div className="fixed top-4 left-4 z-50 bg-black/90 text-white p-4 rounded text-sm font-mono border-2 border-red-500">
        <div className="text-green-400">
          Zoom Mode: {isZoomMode ? "✅ ON" : "❌ OFF"}
        </div>
        <div>Scale: {scale.toFixed(2)}x</div>
        <div>Scroll: {scrollY.toFixed(0)}px</div>
        <div>Activation: {activationPoint.toFixed(0)}px</div>
        <div>Progress: {progress.toFixed(0)}%</div>
        <div className="mt-2 bg-gray-700 h-2 rounded">
          <div
            className="bg-red-500 h-2 rounded transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Scrollable content */}
      <div style={{ height: "300vh", width: "100%" }}>
        <div
          style={{
            height: "300vh",
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
        <div className="h-screen flex items-center justify-center">
          <div className="bg-black/80 p-8 rounded-lg text-white text-center max-w-md">
            <h1 className="text-4xl font-bold mb-4">🚪 Portal Door</h1>
            <p className="mb-4">Scroll down to activate zoom mode</p>
            <div className="text-sm">
              <div>Progress: {progress.toFixed(0)}%</div>
              <div className="bg-gray-700 h-3 rounded mt-2">
                <div
                  className="bg-red-500 h-3 rounded transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen flex items-center justify-center">
          <div className="bg-black/80 p-8 rounded-lg text-white text-center max-w-md">
            <h2 className="text-3xl font-bold mb-4">
              {isZoomMode
                ? "🎯 ZOOM ACTIVE!"
                : `${progress < 100 ? "Keep Scrolling..." : "Almost There!"}`}
            </h2>
            <p className="text-lg">
              {isZoomMode
                ? "🖱️ Use mouse wheel to zoom into the door!"
                : `${(100 - progress).toFixed(0)}% to go`}
            </p>
            {isZoomMode && (
              <div className="mt-4 text-2xl animate-bounce">
                Current Zoom: {scale.toFixed(1)}x
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Activation zone indicator */}
      {progress > 80 && !isZoomMode && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-yellow-600/90 text-white px-6 py-3 rounded-lg animate-pulse">
            ⚡ Almost ready! Scroll a bit more...
          </div>
        </div>
      )}

      {/* Zoom mode indicator */}
      {isZoomMode && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-red-600/90 text-white px-8 py-4 rounded-lg text-xl font-bold animate-pulse">
            🚪 ZOOM MODE - USE MOUSE WHEEL - {scale.toFixed(1)}x
          </div>
        </div>
      )}
    </div>
  );
}
