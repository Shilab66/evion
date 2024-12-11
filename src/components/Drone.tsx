import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export function Drone() {
    const { scene } = useGLTF("/assets/BudgetDrone.glb"); // Use the 'scene' object

    return (
        <group scale={[0.5, 0.5, 0.5]} position={[0, 1, 0]} rotation={[0, Math.PI / 2, 0]}>
            <primitive object={scene} /> {/* Attach the whole scene */}
        </group>
    );
}
