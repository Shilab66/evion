import React, { useRef, useEffect, forwardRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import * as THREE from 'three';
import { Drone } from './Drone';

interface DroneModelProps {
  onIntroComplete: () => void;
}

export const DroneModel = forwardRef<THREE.Group, DroneModelProps>(
  ({ onIntroComplete }, ref) => {
    const internalRef = useRef<THREE.Group>(null);
    const droneRef = ref || internalRef; // Use forwarded ref or internal ref

    useEffect(() => {
      if (droneRef && 'current' in droneRef && droneRef.current) {
        const tl = gsap.timeline({ onComplete: onIntroComplete });

        tl.to(droneRef.current.rotation, {
          y: Math.PI * 2,
          duration: 2,
          ease: 'power2.inOut',
        });
      }
    }, [onIntroComplete]);

    useFrame((state, delta) => {
      if (droneRef && 'current' in droneRef && droneRef.current) {
        droneRef.current.rotation.y += delta * 0.1;
      }
    });

    return (
      <group ref={droneRef} scale={[0.5, 0.5, 0.5]}>
        <Drone />
      </group>
    );
  }
);

DroneModel.displayName = 'DroneModel';
