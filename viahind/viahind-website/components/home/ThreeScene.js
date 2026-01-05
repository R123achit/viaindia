'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { 
  OrbitControls, 
  Sphere, 
  Environment,
  Text,
  Center,
  Float,
  MeshDistortMaterial
} from '@react-three/drei';
import * as THREE from 'three';
import { EffectComposer, Bloom, DepthOfField, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';

/* ================= ENERGY RINGS ================= */
function EnergyRings() {
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.5;
      ring1Ref.current.rotation.y = t * 0.3;
      ring1Ref.current.scale.setScalar(2.8 + Math.sin(t * 2) * 0.1);
    }
    
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.4;
      ring2Ref.current.rotation.z = t * 0.6;
      ring2Ref.current.scale.setScalar(3.2 + Math.cos(t * 2.5) * 0.1);
    }
    
    if (ring3Ref.current) {
      ring3Ref.current.rotation.y = t * 0.7;
      ring3Ref.current.rotation.z = -t * 0.2;
      ring3Ref.current.scale.setScalar(3.6 + Math.sin(t * 1.5) * 0.1);
    }
  });

  return (
    <group>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshBasicMaterial
          color="#00AAFF"
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshBasicMaterial
          color="#0066FF"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
      
      <mesh ref={ring3Ref}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshBasicMaterial
          color="#00CCFF"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

/* ================= PARTICLES ================= */
function Particles() {
  const particlesRef = useRef();
  const count = 100;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 3 + Math.random() * 2;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      scales[i] = Math.random() * 0.5 + 0.5;
    }
    
    return { positions, scales };
  }, []);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(clock.getElapsedTime() + i) * 0.001;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={count}
          array={particles.scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#0066FF"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* ================= ADVANCED BALLOON ================= */
function AdvancedBalloon() {
  const meshRef = useRef();
  const materialRef = useRef();

  const customMaterial = useMemo(() => {
    const mat = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uColor1: { value: new THREE.Color('#0066FF') },
        uColor2: { value: new THREE.Color('#00CCFF') },
        uColor3: { value: new THREE.Color('#0044AA') },
      },
      vertexShader: `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        // Advanced noise function
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
        
        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          
          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          
          vec4 x = x_ *ns.x + ns.yyyy;
          vec4 y = y_ *ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          
          vec4 s0 = floor(b0)*2.0 + 1.0;
          vec4 s1 = floor(b1)*2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          
          vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
          
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x;
          p1 *= norm.y;
          p2 *= norm.z;
          p3 *= norm.w;
          
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          
          vec3 pos = position;
          
          // Multi-layered distortion
          float noise1 = snoise(pos * 1.5 + uTime * 0.3);
          float noise2 = snoise(pos * 3.0 - uTime * 0.2);
          float noise3 = snoise(pos * 0.8 + uTime * 0.15);
          
          float displacement = (noise1 * 0.15 + noise2 * 0.08 + noise3 * 0.12);
          pos += normal * displacement;
          
          vPosition = pos;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        
        varying vec3 vNormal;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          // Fresnel effect
          vec3 viewDirection = normalize(cameraPosition - vPosition);
          float fresnel = pow(1.0 - dot(viewDirection, vNormal), 3.0);
          
          // Iridescent color mixing
          float pattern = sin(vPosition.x * 3.0 + uTime) * 
                         cos(vPosition.y * 3.0 - uTime) * 
                         sin(vPosition.z * 3.0 + uTime * 0.5);
          
          vec3 color = mix(uColor1, uColor2, pattern * 0.5 + 0.5);
          color = mix(color, uColor3, fresnel * 0.4);
          
          // Add rim lighting
          float rim = pow(fresnel, 2.0);
          color += vec3(0.3, 0.5, 1.0) * rim * 0.5;
          
          // Metallic highlights
          float highlight = pow(max(dot(vNormal, vec3(0.5, 1.0, 0.5)), 0.0), 32.0);
          color += vec3(1.0) * highlight * 0.8;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `,
      transparent: false,
    });

    return mat;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.1;
    }
    if (customMaterial) {
      customMaterial.uniforms.uTime.value = t;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1, 128, 128]} scale={2.5}>
        <primitive attach="material" object={customMaterial} />
      </Sphere>
    </Float>
  );
}

/* ================= 3D TEXT ================= */
function BrandText() {
  const textRef = useRef();
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.position.z = 2.8 + Math.sin(clock.getElapsedTime() * 0.5) * 0.1;
    }
  });
  
  return (
    <group ref={textRef}>
      {/* Main text */}
      <Text
        position={[0, 0, 2.8]}
        fontSize={0.5}
        fontWeight={900}
        color="#FFFFFF"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#0066FF"
        outlineOpacity={1}
        letterSpacing={0.02}
      >
        Viahind
        <meshStandardMaterial
          color="#FFFFFF"
          metalness={0.9}
          roughness={0.1}
          emissive="#00AAFF"
          emissiveIntensity={0.5}
        />
      </Text>
      
      {/* Glow layer behind text */}
      <Text
        position={[0, 0, 2.75]}
        fontSize={0.52}
        fontWeight={900}
        color="#0066FF"
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.02}
      >
        Viahind
        <meshBasicMaterial
          color="#0066FF"
          transparent
          opacity={0.3}
        />
      </Text>
    </group>
  );
}

/* ================= SCENE ================= */
export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.5], fov: 65 }}
      gl={{ 
        antialias: true, 
        alpha: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2
      }}
    >
      {/* Advanced Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
      <directionalLight position={[-5, -3, -5]} intensity={0.8} color="#4488FF" />
      <pointLight position={[0, 8, 0]} intensity={2} color="#FFFFFF" />
      <pointLight position={[-5, 0, 5]} intensity={1} color="#0066FF" />
      <spotLight
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={2}
        castShadow
      />

      {/* Environment for reflections */}
      <Environment preset="city" />

      {/* Main 3D Elements */}
      <AdvancedBalloon />
      <BrandText />
      <EnergyRings />
      <Particles />

      {/* Post-processing effects */}
      <EffectComposer multisampling={8}>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.15}
          luminanceSmoothing={0.9}
          height={300}
          blendFunction={BlendFunction.ADD}
        />
        <ChromaticAberration
          offset={[0.0015, 0.0015]}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        minDistance={6.5}
        maxDistance={6.5}
      />
    </Canvas>
  );
}
