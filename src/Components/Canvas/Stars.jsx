import React, { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const sphere = random.inSphere(new Float32Array(1500), { radius: 1.2 });

  // Fix rotation logic
  useFrame((state, delta) => {
    // Rotate the stars continuously
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={true}
        />
      </Points>
    </group>
  );
};

const StarCanvas = () => {
  return (
    <div
      className="w-full min-h-screen absolute inset-0 z-[-1]"
      style={{ backgroundColor: "#000000" }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarCanvas;
