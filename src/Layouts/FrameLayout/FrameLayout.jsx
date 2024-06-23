import { Canvas } from "@react-three/fiber";

const FrameLayout = ({ children }) => {
  return (
    <div style={{ width: "100svw", height: "100svh" }}>
      <Canvas>{children}</Canvas>
    </div>
  );
};

export default FrameLayout;
