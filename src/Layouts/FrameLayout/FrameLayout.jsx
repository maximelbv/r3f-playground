import { Canvas } from "@react-three/fiber";

const FrameLayout = ({ children }) => {
  return (
    <div style={{ width: "100svw", height: "100svh" }}>
      <Canvas>
        <ambientLight intensity={2} />
        <directionalLight position={[0, 0, 5]} />
        {children}
      </Canvas>
    </div>
  );
};

export default FrameLayout;
