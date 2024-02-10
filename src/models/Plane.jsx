import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import planeScene from "../assets/3d/plane.glb";

// 3D Model from: https://sketchfab.com/3d-models/stylized-ww1-plane-c4edeb0e410f46e8a4db320879f0a1db
const  Plane = ({isRotating, ...props}) => {
  const ref = useRef();
  // Load the 3D model and its animations
  const plane = useGLTF(planeScene);
  // Get animation actions associated with the plane
  const { actions } = useAnimations(plane.animations, ref)
  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={plane.scene} />
    </mesh>
  );
}
export default Plane;