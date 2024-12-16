import { useGLTF } from "@react-three/drei";

export function DroneParts() {
    const drone = useGLTF("/assets/BudgetDrone.glb"); // Use the 'scene' object

    return (
        <group scale={[0.7, 0.7, 0.7]} position={[0, 0, 0]} rotation={[- Math.PI / 4, 0, 0]}>
            <mesh>
                <primitive object={drone.nodes.Base} />
                <primitive object={drone.nodes.Cube} />
            </mesh>
        </group>
    );
}