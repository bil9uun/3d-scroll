/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group } from "three";

useGLTF.preload("/animated_display.glb");

export default function Model() {
  const group = useRef<Group>(null);
  const { animations, scene } = useGLTF("/animated_display.glb");
  const { actions } = useAnimations(animations, scene);
  const scroll = useScroll();

  useEffect(() => {
    console.log(actions);
    //@ts-ignore
    actions["Animation"].play().paused = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useFrame(
    () =>
      //@ts-ignore
      (actions["Animation"].time =
        //@ts-ignore
        (actions["Animation"].getClip().duration * scroll.offset) / 4)
  );
  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}
