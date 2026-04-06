import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Box3, Vector3 } from "three";

const PlayerModel = () => {
  const { scene } = useGLTF("/minecraft_player/scene.gltf");
  const clonedScene = useMemo(() => scene.clone(true), [scene]);
  const fit = useMemo(() => {
    const bounds = new Box3().setFromObject(clonedScene);
    const size = bounds.getSize(new Vector3());
    const center = bounds.getCenter(new Vector3());
    const scale = 4.8 / (size.y || 1);

    return {
      scale,
      position: [
        -center.x * scale,
        -center.y * scale - 0.25,
        -center.z * scale,
      ],
    };
  }, [clonedScene]);
  const rootRef = useRef();
  const headRef = useRef();
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    headRef.current = clonedScene.getObjectByName("Head_02");

    const handleMouseMove = (event) => {
      pointerRef.current = {
        x: event.clientX / window.innerWidth - 0.5,
        y: event.clientY / window.innerHeight - 0.5,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [clonedScene]);

  useFrame(() => {
    const { x, y } = pointerRef.current;

    if (rootRef.current) {
      rootRef.current.rotation.y = x * 0.3;
      rootRef.current.rotation.x = y * -0.08;
    }

    if (headRef.current) {
      headRef.current.rotation.y = x * 0.85;
      headRef.current.rotation.x = y * -0.55;
    }
  });

  return (
    <group ref={rootRef} position={[0, -0.6, 0]} rotation={[0.08, -0.24, 0]}>
      <primitive
        object={clonedScene}
        position={fit.position}
        scale={fit.scale}
      />
    </group>
  );
};

const TechPlayerPreview = () => {
  return (
    <div className="techPlayerViewport" aria-hidden="true">
      <Canvas camera={{ position: [0, 0.55, 4.35], fov: 28 }} gl={{ alpha: true }}>
        <ambientLight intensity={2.6} />
        <directionalLight position={[3, 4, 5]} intensity={3.5} />
        <directionalLight position={[-4, 2, 3]} intensity={1.8} />
        <Suspense fallback={null}>
          <PlayerModel />
        </Suspense>
      </Canvas>
    </div>
  );
};

useGLTF.preload("/minecraft_player/scene.gltf");

export default TechPlayerPreview;
