import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { AmbientLight, Mesh, PointLight } from "three";

const Cube = () => {
    const MeshRef = useRef<Mesh>(null);

    useFrame (() => {
        if(!MeshRef.current) {
            return ;
        }

        MeshRef.current.rotation.x += 0.01;
        MeshRef.current.rotation.y += 0.01;
    });

    return (
        <Mesh ref={MeshRef}>
            <boxGeometry/>
            <meshStandardMaterial/>
        </Mesh>
    );
}

const Cub = () => {
    return (
        <Canvas>
            <AmbientLight/>
            <PointLight position={[10, 10, 10]}/>
            <Cube/>
        </Canvas>
    );
}

export default Cub

