import { Canvas } from "@react-three/fiber";
import "./styles.css";

const FrameLayout = ({ children }) => {
  return (
    <div className="layout" style={{ width: "100svw", height: "100svh" }}>
      <Canvas>{children}</Canvas>
    </div>
  );
};

export default FrameLayout;
