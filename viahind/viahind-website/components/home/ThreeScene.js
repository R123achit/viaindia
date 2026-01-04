'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import * as THREE from 'three';

/* ================= TEXTURE ================= */
function useViahindTexture() {
  return useMemo(() => {
    const size = 2048;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;

    const ctx = canvas.getContext('2d');

    // Balloon color
    ctx.fillStyle = '#0055FF';
    ctx.fillRect(0, 0, size, size);

    // Text styling (slightly smaller)
    ctx.font = 'bold 140px Inter, Arial, sans-serif';
    ctx.fillStyle = '#FFFFFF';
    ctx.strokeStyle = '#001133';
    ctx.lineWidth = 6;

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Shadow
    ctx.shadowColor = 'rgba(0,0,0,0.3)';
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 2;
    ctx.shadowOffsetY = 2;

    // Carefully spaced UV positions
    const positions = [
      { x: 0.50, y: 0.50 }, // Front
      { x: 0.02, y: 0.50 }, // Back (slightly off edge)
      { x: 0.78, y: 0.50 }, // Right
      { x: 0.22, y: 0.50 }, // Left
      { x: 0.50, y: 0.18 }, // Top
      { x: 0.50, y: 0.82 }, // Bottom
    ];

    positions.forEach(({ x, y }) => {
      const px = x * size;
      const py = y * size;
      ctx.strokeText('Viahind', px, py);
      ctx.fillText('Viahind', px, py);
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;

    return texture;
  }, []);
}

/* ================= BALLOON ================= */
function AnimatedBalloon() {
  const meshRef = useRef();
  const texture = useViahindTexture();

  const material = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({
      map: texture,

      // 🎈 Balloon realism
      roughness: 0.18,
      metalness: 0.05,
      clearcoat: 0.6,
      clearcoatRoughness: 0.1,
    });

    // Gentle organic distortion
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 };

      shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        `
          #include <common>
          uniform float uTime;
        `
      );

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
          vec3 transformed = vec3(position);
          float wave =
            sin(position.x * 1.6 + uTime) *
            cos(position.y * 1.6 + uTime) * 0.08;
          transformed += normal * wave;
        `
      );

      mat.userData.shader = shader;
    };

    return mat;
  }, [texture]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.08;
    meshRef.current.rotation.x = t * 0.04;

    if (material.userData.shader) {
      material.userData.shader.uniforms.uTime.value = t * 0.6;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 96, 192]} scale={2.5}>
      <primitive attach="material" object={material} />
    </Sphere>
  );
}

/* ================= SCENE ================= */
export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 65 }}
      gl={{ antialias: true, alpha: true }}
    >
      {/* Lights */}
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={2.0} />
      <directionalLight position={[-5, -5, -5]} intensity={1.2} />
      <pointLight position={[0, 6, 0]} intensity={1.5} />

      <AnimatedBalloon />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        minDistance={6.5}
        maxDistance={6.5}
      />
    </Canvas>
  );
}
