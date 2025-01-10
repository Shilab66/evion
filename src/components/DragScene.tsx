import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Drone } from "./Drone";

export function DragScene() {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (subtitleRef.current && titleRef.current) {
      const fadeInDuration = 1.5;
      subtitleRef.current.style.opacity = "0";
      subtitleRef.current.style.transform = "translateY(20px)";
      titleRef.current.style.opacity = "0";
      titleRef.current.style.transform = "translateY(20px)";

      // Fade in subtitle
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.transition = `opacity ${fadeInDuration}s ease, transform ${fadeInDuration}s ease`;
          subtitleRef.current.style.opacity = "1";
          subtitleRef.current.style.transform = "translateY(0)";
        }
      }, 500);

      // Fade in title
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.transition = `opacity ${fadeInDuration}s ease, transform ${fadeInDuration}s ease`;
          titleRef.current.style.opacity = "1";
          titleRef.current.style.transform = "translateY(0)";
        }
      }, 1000);
    }
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mt-[1000px]">
        <h1
          ref={subtitleRef}
          className="text-white text-8xl opacity-0 transition-transform"
        >
          Precision Agriculture
        </h1>
        <h1
          ref={titleRef}
          className="text-8xl font-medium gradient-glow text-glow font-bold opacity-0 transition-transform mb-[400px]"
        >
          Reimagined
        </h1>
      </div>

      {/* Drone Section */}
      <div className="mt-20 w-full h-[60vh] flex justify-center items-center">
        <Canvas camera={{ position: [0, 1, 5], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} position={[5, 5, 5]} />
          <Drone />
        </Canvas>
      </div>
    </div>
  );
}
