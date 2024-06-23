import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useRef } from "react";

const InteractiveSphere = () => {
  const sphereRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    sphereRef.current.rotation.y += delta * 0.5;
  });

  const handleHover = (event) => {
    event.stopPropagation();
    setIsHovered(true);
  };

  const handleQuitHover = (event) => {
    setIsHovered(false);
  };

  return (
    <>
      <mesh
        ref={sphereRef}
        onPointerEnter={handleHover}
        onPointerLeave={handleQuitHover}
      >
        <boxGeometry />
        <MeshWobbleMaterial
          color={isHovered ? "#4f81e4" : "#ba4fe4"}
          speed={3}
        />
      </mesh>
      <OrbitControls />
    </>
  );
};

export default InteractiveSphere;
