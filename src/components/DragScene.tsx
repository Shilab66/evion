import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { DroneModel } from './DroneModel.tsx';

interface DragSceneProps {
  onIntroComplete: () => void;
}

export function DragScene({ onIntroComplete }: DragSceneProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const tl = gsap.timeline();
      
      tl.to(textRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        delay: 1.5 // Delay the text fade-in until after the drone rotation
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[40vh]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <DroneModel onIntroComplete={onIntroComplete} />
      </Canvas>
      <div 
        ref={textRef} 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 text-white text-2xl"
      >
        Meet the Drone
      </div>
    </div>
  );
}

