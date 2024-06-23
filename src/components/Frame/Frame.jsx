import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = ({ position }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"orange"} />
    </mesh>
  );
};

const Frame = () => {
  return (
    <div style={{ width: "100svw", height: "100svh" }}>
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 5]} />
        <Cube />
      </Canvas>
    </div>
  );
};

export default Frame;
