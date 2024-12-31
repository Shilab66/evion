import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { Drone } from './Drone';

interface DroneModelProps {
  onIntroComplete: () => void;
}

export function DroneModel({ onIntroComplete }: DroneModelProps) {
  const droneRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (droneRef.current) {
      const tl = gsap.timeline({ onComplete: onIntroComplete });
      
      tl.to(droneRef.current.rotation, {
        y: Math.PI * 2,
        duration: 2,
        ease: "power2.inOut"
      });
    }
  }, [onIntroComplete]);

  useFrame((state, delta) => {
    if (droneRef.current) {
      droneRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={droneRef} scale={[0.5, 0.5, 0.5]}>
      <Drone />
    </group>
  );
}

