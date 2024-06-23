import { useHelper } from "@react-three/drei";
import React from "react";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Scene = ({ children }) => {
  const directionalLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "#181818");

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 0, 2]} ref={directionalLightRef} />
      {children}
    </>
  );
};

export default Scene;
