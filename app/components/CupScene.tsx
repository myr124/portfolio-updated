'use client';

import { Canvas } from '@react-three/fiber';
import { useGLTF, PerspectiveCamera, Environment } from '@react-three/drei';
import { useState, useEffect } from 'react';

function Cup({ rotation }: { rotation: number }) {
    const { scene } = useGLTF('/scene.gltf');

    // Remove spoon from the model
    scene.traverse((child: any) => {
        if (child.name && child.name.toLowerCase().includes('spoon')) {
            child.visible = false;
        }
    });

    return (
        <group rotation={[rotation, 0, 0]} position={[-80, 0, 0]}>
            <primitive object={scene} scale={0.8} position={[0, 0, 0]} />
        </group>
    );
}

export default function CupScene() {
    const [scrollRotation, setScrollRotation] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const firstPageHeight = window.innerHeight;

            // Only rotate during the first page scroll
            const scrollPercentage = Math.min(scrollY / firstPageHeight, 1);

            // Rotate from 0 to +90 degrees (tilting backward/upward) as user scrolls
            const rotation = scrollPercentage * (Math.PI / 2);
            setScrollRotation(rotation);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-full h-screen fixed top-0 left-0 z-[15] pointer-events-none">
            <Canvas
                shadows
                camera={{ position: [47.58, 211.30, 295.64], fov: 60 }}
                gl={{ alpha: true }}
                style={{ background: 'transparent' }}
            >
                {/* Lighting */}
                <ambientLight intensity={0.8} />
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={1.5}
                    castShadow
                    shadow-mapSize-width={2048}
                    shadow-mapSize-height={2048}
                />
                <pointLight position={[-5, 5, -5]} intensity={0.5} color="#ffa500" />

                {/* Environment for reflections */}
                <Environment preset="sunset" />

                {/* Cup with scroll-based rotation */}
                <Cup rotation={scrollRotation} />
            </Canvas>
        </div>
    );
}
