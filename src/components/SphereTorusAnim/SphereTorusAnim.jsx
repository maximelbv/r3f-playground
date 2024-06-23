import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = ({ position, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 2;
    ref.current.position.y = Math.sin(state.clock.elapsedTime) * 2;
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position, color, args }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.position.x = Math.sin(state.clock.elapsedTime) * 3;
  });

  return (
    <mesh position={position} ref={ref}>
      <sphereGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Torus = ({ rotation, position, color, args }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta;
  });

  return (
    <mesh rotation={rotation} position={position} ref={ref}>
      <torusGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const SphereTorusAnim = () => {
  return (
    <group rotation={[0, 0, 0]}>
      <Sphere position={[3, 0, 0]} color={"#1874F2"} args={[1, 64, 32]} />
      <Torus
        rotation={[0, 2, 0]}
        position={[0, 0, 0]}
        color={"#f2a918"}
        args={[1.2, 0.2, 30, 30]}
      />
    </group>
  );
};

export default SphereTorusAnim;
