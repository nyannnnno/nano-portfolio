import React, { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Box = () => {
  const { scene, camera, gl } = useThree();
  const cubeRef = useRef(null);

  useEffect(() => {
    const loader = new THREE.TextureLoader();

  
    const textures = [
      loader.load('/textures/side1.jpg'),
      null, 
      loader.load('/textures/side3.jpg'),
      loader.load('/textures/side4.jpg'),
      loader.load('/textures/side5.jpg'),
      loader.load('/textures/side6.jpg'),
    ];

    const video = document.createElement('video');
    video.src = '/textures/side2.mp4'; 
    video.crossOrigin = 'anonymous';
    video.loop = true;
    video.muted = true; 
    video.play();

    const videoTexture = new THREE.VideoTexture(video);
    textures[1] = videoTexture; 

    const materials = textures.map(
      texture =>
        texture ? new THREE.MeshBasicMaterial({ map: texture }) : new THREE.MeshBasicMaterial({ color: 0x000000 }) // Fallback material
    );

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const cube = new THREE.Mesh(geometry, materials);

    scene.add(cube);
    cubeRef.current = cube;

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      if (cubeRef.current) {
        cubeRef.current.rotation.x += 0.006;
        cubeRef.current.rotation.y += 0.006;
      }

      gl.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scene.remove(cube);
      video.pause();
      video.src = ''; 
    };
  }, [scene, camera, gl]);

  return null;
};

export default Box;
