<<<<<<< Updated upstream
import { Canvas, ThreeEvent } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState } from 'react';
import { Drone } from './Drone';
import * as THREE from 'three';

export function DragScene() {
    const [isDragging, setIsDragging] = useState(false);
    const [activePointerId, setActivePointerId] = useState<number | null>(null);

    const handlePointerDown = (event: ThreeEvent<PointerEvent>) => {
        if (event.nativeEvent.isPrimary) {
            setIsDragging(true);
            setActivePointerId(event.pointerId); // Track the pointer starting the drag
            event.stopPropagation(); // Prevent propagation to OrbitControls
        }
    };

    const handlePointerMove = (event: ThreeEvent<PointerEvent>) => {
        if (isDragging && event.pointerId === activePointerId) {
            const object = event.object as THREE.Object3D; // Type the object explicitly
            object.position.x += event.nativeEvent.movementX / 100; // Use movementX for consistency
            object.position.y -= event.nativeEvent.movementY / 100; // Use movementY for consistency
        }
    };

    const handlePointerUp = (event: ThreeEvent<PointerEvent>) => {
        if (event.pointerId === activePointerId) {
            setIsDragging(false);
            setActivePointerId(null); // Reset the active pointer
        }
    };

    return (
        <div className="w-full h-[40vh]"> {/* Full width and 40% of the screen height */}
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} className="w-full h-full">
                {/* Lighting */}
                <directionalLight intensity={2} position={[1, 2, 3]} />
                <directionalLight intensity={2} position={[-3, -2, -1]} />
                
                {/* Draggable and Scaled Drone */}
                <mesh
                    scale={[0.5, 0.5, 0.5]}
                    onPointerDown={handlePointerDown}
                    onPointerMove={handlePointerMove}
                    onPointerUp={handlePointerUp}
                >
                    <Drone />
                </mesh>
                
                {/* Camera Controls */}
                <OrbitControls />
            </Canvas>
        </div>
    );
=======
import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { DroneModel } from './DroneModel.tsx';

interface DragSceneProps {
  onIntroComplete: () => void;
>>>>>>> Stashed changes
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

