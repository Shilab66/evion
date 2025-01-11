import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three"; 

export function Drone() {
  const { scene } = useGLTF("/assets/RealDrone.glb"); // Load the drone model
  const droneRef = useRef<THREE.Group>(null); // Ref for the drone group

  useFrame(() => {
    if (droneRef.current) {
      // Rotate the drone slowly on the Y-axis
      droneRef.current.rotation.y += 0.03; // Adjust this value for rotation speed
    }
  });

  return (
    <group
      ref={droneRef}
      scale={[0.003, 0.003, 0.003]}
      position={[0, -1, 0]}
      rotation={[0, -7 * Math.PI / 6, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}
