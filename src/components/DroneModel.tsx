import React, { useRef, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Drone } from "./Drone";

interface DroneModelProps {}

export const DroneModel = forwardRef<THREE.Group, DroneModelProps>((_, ref) => {
  const internalRef = useRef<THREE.Group>(null);
  const droneRef = ref || internalRef; // Use forwarded ref or internal ref

  useFrame((state, delta) => {
    if (droneRef && "current" in droneRef && droneRef.current) {
      // Incrementally rotate the drone along the Y-axis
      droneRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <group ref={droneRef} scale={[0.5, 0.5, 0.5]}>
      <Drone />
    </group>
  );
});

DroneModel.displayName = "DroneModel";
