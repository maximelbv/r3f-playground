import { useFrame } from "@react-three/fiber";
import { useState } from "react";
import { useRef } from "react";

const BritneySpheres = () => {
  const sphereRef = useRef();
  const [isHovered, setIsHovered] = useState(false);

  useFrame((state, delta) => {
    sphereRef.current.rotation.y += delta * (isHovered ? 1 : 0.2);
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

export default BritneySpheres;
