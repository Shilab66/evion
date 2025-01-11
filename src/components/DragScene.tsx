import { Canvas } from "@react-three/fiber";
import { Drone } from "./Drone";
import { useEffect, useRef, useState } from "react";

export function DragScene() {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const droneRef = useRef<HTMLDivElement>(null); // Reference to the drone section
  const [droneVisible, setDroneVisible] = useState(false);

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

    // Intersection Observer for the drone fade-in effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setDroneVisible(true); // Set drone to visible when it enters the viewport
          }
        });
      },
      { threshold: 0.5 } // 50% of the drone section should be visible before triggering fade-in
    );

    if (droneRef.current) {
      observer.observe(droneRef.current);
    }

    // Clean up observer on component unmount
    return () => {
      if (droneRef.current) {
        observer.unobserve(droneRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center mt-[130vh]">
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
      <div
        ref={droneRef} // Attach the reference to the drone section
        className={`w-full h-[200vh] mt-[-100vh] flex justify-center items-center transition-opacity duration-1000 ${
          droneVisible ? "opacity-100" : "opacity-0"
        }`} // Apply the fade-in effect using opacity
      >
        <Canvas camera={{ position: [0, 1, 5], fov: 90 }}>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1} position={[5, 5, 5]} />
          <Drone />
        </Canvas>
      </div>
    </div>
  );
}
