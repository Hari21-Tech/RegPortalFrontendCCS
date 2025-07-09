"use client";

import { useEffect, useState } from "react";

export default function Component() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startZoomAt = window.innerHeight * 2; // Start zoom after 200vh

      if (scrollY > startZoomAt) {
        const progress = scrollY - startZoomAt;
        const zoomFactor = 1 + progress / 500; // Zoom speed - lower = faster zoom
        setScale(Math.min(zoomFactor, 3)); // Cap at 3x zoom
      } else {
        setScale(1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Scrollable content to enable scrolling */}
      <div style={{ height: "400vh", width: "100%" }}>
        {/* Background image that sticks */}
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "sticky",
            top: 0,
            zIndex: 0,
          }}
        />
      </div>

      {/* Zoom layer that appears after scrolling */}
      {scale > 1 && (
        <div
          className="fixed inset-0 pointer-events-none"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            transform: `scale(${scale})`,
            transformOrigin: "center center",
            zIndex: 10,
            transition: "transform 0.1s ease-out",
          }}
        />
      )}

      {/* Content sections for demonstration */}
      <div className="absolute top-0 left-0 right-0 z-20 pointer-events-none">
        <div className="h-screen flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg pointer-events-auto">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Scroll Down
            </h1>
            <p className="text-gray-600">
              Experience the zoom effect as you scroll
            </p>
          </div>
        </div>

        <div className="h-screen flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg pointer-events-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Keep Scrolling
            </h2>
            <p className="text-gray-600">The zoom effect will start soon</p>
          </div>
        </div>

        <div className="h-screen flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg pointer-events-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Zoom Effect Active
            </h2>
            <p className="text-gray-600">Current scale: {scale.toFixed(2)}x</p>
          </div>
        </div>

        <div className="h-screen flex items-center justify-center">
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg pointer-events-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Maximum Zoom
            </h2>
            <p className="text-gray-600">The effect is capped at 3x zoom</p>
          </div>
        </div>
      </div>
    </div>
  );
}
