import { Canvas } from "@react-three/fiber";
import { DroneParts } from "./DroneParts";

export function Scene() {
    return(
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 5, 5], fov: 90 }} >
                <directionalLight intensity={2} position={[1, 2, 3]} />
                <directionalLight intensity={2} position={[-3, -2, -1]} />
                <DroneParts />
            </Canvas>
        </div>
    );
}