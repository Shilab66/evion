import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { gsap } from 'gsap';
import { DroneModel } from './DroneModel';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

interface DragSceneProps {
  onIntroComplete: () => void;
}

function AnimatedDrone() {
  const droneRef = useRef<THREE.Group>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    if (droneRef.current) {
      // Create ScrollTrigger for drone animations
      scrollTriggerRef.current = ScrollTrigger.create({
        trigger: "canvas", // The canvas container
        start: "top top", // Start when the canvas hits the top of the viewport
        end: "bottom bottom", // End when the canvas leaves the viewport
        scrub: true, // Smoothly synchronize animation with scroll progress
        onUpdate: (self) => {
          const progress = self.progress;

          // Rotate the drone by 360° during the first 50% of scroll
          if (progress <= 0.5) {
            const rotationProgress = progress / 0.5; // Normalize to [0, 1]
            droneRef.current!.rotation.y = rotationProgress * Math.PI * 2;
            droneRef.current!.position.y = 0; // Keep Y fixed
          } else {
            // After rotation, move the drone downward along the Y-axis
            const moveProgress = (progress - 0.5) / 0.5; // Normalize second half to [0, 1]
            droneRef.current!.rotation.y = Math.PI * 2; // Fix rotation at 360°
            droneRef.current!.position.y = -5 * moveProgress; // Move downward
          }
        },
      });
    }

    // Cleanup ScrollTrigger instance on component unmount
    return () => {
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }
    };
  }, []);

  return <DroneModel ref={droneRef} onIntroComplete={() => console.log("Intro complete")} />;
}




export function DragScene({ onIntroComplete }: DragSceneProps) {
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (subtitleRef.current && titleRef.current) {
      const tl = gsap.timeline({ onComplete: onIntroComplete });

      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 2.5, // Delay the subtitle fade-in until after the drone rotation
      }).to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      }, "-=0.5"); // Start the title animation 0.5 seconds before the subtitle animation ends
    }
  }, [onIntroComplete]);

  return (
    <div className="relative w-full h-screen">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <AnimatedDrone />
      </Canvas>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p 
          ref={subtitleRef}
          className="text-4xl font-light text-muted-foreground opacity-0 transform translate-y-10 mb-5 mt-8"
        >
          Meet Evion
        </p>
        <h1 
          ref={titleRef}
          className="text-8xl font-medium gradient-text text-glow opacity-0 transform translate-y-10"
        >
          Precision Agriculture <span className="italic">Reimagined</span>
        </h1>
      </div>
    </div>
  );
}

