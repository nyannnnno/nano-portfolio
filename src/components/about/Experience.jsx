import { OrbitControls, Environment, Float } from '@react-three/drei';
import Box from './Box';

export const Experience = () => {
  return (
    <>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Box /> 
      </Float>
      <OrbitControls enableZoom={true} minDistance={35} maxDistance={35} />
      
      <Environment preset="forest" />
      
      <directionalLight position={[5, 5, 10]} intensity={2} />
      
      <mesh position-y={-1} rotation-x={-Math.PI / 2} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <shadowMaterial transparent opacity={0.2} />
      </mesh>
    </>
  );
};
