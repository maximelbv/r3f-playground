import { useHelper } from "@react-three/drei";
import { useControls } from "leva";
import React from "react";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const Scene = ({ children }) => {
  const directionalLightRef = useRef();

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "#181818");
  const { lightColor, lightIntensity } = useControls({
    lightColor: "white",
    lightIntensity: {
      value: 1,
      min: 0,
      max: 5,
    },
  });
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        position={[0, 0, 2]}
        ref={directionalLightRef}
        color={lightColor}
        intensity={lightIntensity}
      />
      {children}
    </>
  );
};

export default Scene;
