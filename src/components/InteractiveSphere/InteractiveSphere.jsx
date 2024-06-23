import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useRef } from "react";

const InteractiveSphere = () => {
  const sphereRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    isHovered && (sphereRef.current.rotation.y += delta * 0.2);
  });

  const handleHover = (event) => {
    event.stopPropagation();
    setIsHovered(true);
  };

  const handleQuitHover = (event) => {
    setIsHovered(false);
  };

  return (
    <mesh
      ref={sphereRef}
      onPointerEnter={handleHover}
      onPointerLeave={handleQuitHover}
    >
      <sphereGeometry />
      <meshBasicMaterial color={"red"} wireframe />
    </mesh>
  );
};

export default InteractiveSphere;
