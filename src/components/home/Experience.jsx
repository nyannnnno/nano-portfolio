import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
  return (
    <>
      <Float
        speed={1} 
        rotationIntensity={0.5} 
        floatIntensity={0.5} 
      >
        <Book />
      </Float>
      <OrbitControls
        enableZoom={true}
        minDistance={50}
        maxDistance={50}
      />
      <Environment preset="forest" />
      <directionalLight position={[1, 1, 10]} intensity={2} />
      <mesh position-y={-1} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};