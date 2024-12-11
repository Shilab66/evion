import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { SetStateAction, useState } from 'react';
import { Drone } from './Drone';

export function DragScene() {
    const [isDragging, setIsDragging] = useState(false);
    const [activePointerId, setActivePointerId] = useState(null);

    const handlePointerDown = (event: { isPrimary: any; pointerId: SetStateAction<null>; stopPropagation: () => void; }) => {
        if (event.isPrimary) { // Ensure this is the primary pointer (ignore multi-touch)
            setIsDragging(true);
            setActivePointerId(event.pointerId); // Track the pointer starting the drag
            event.stopPropagation(); // Prevent propagation to OrbitControls
        }
    };

    const handlePointerMove = (event: { pointerId: null; object: any; movementX: number; movementY: number; }) => {
        if (isDragging && event.pointerId === activePointerId) {
            const object = event.object;
            object.position.x += event.movementX / 100; // Use movementX for consistency
            object.position.y -= event.movementY / 100; // Use movementY for consistency
        }
    };

    const handlePointerUp = (event: { pointerId: null; }) => {
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
}
