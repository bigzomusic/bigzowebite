'use client';

import { Canvas, extend, useFrame, useThree } from '@react-three/fiber';
import { useAspect, useTexture } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';
import * as THREE from 'three/webgpu';
import { bloom } from 'three/examples/jsm/tsl/display/BloomNode.js';
import { Mesh } from 'three';

import {
  abs,
  blendScreen,
  float,
  mod,
  mx_cell_noise_float,
  oneMinus,
  smoothstep,
  texture,
  uniform,
  uv,
  vec2,
  vec3,
  pass,
  mix,
  add
} from 'three/tsl';

// Replace with a sound wave abstract texture (using original or music wave)
const TEXTUREMAP = { src: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1400&auto=format&fit=crop' }; // abstract waves
const DEPTHMAP = { src: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1400&auto=format&fit=crop' }; // abstract waves (using same for depth to create trippy effect)

extend(THREE as any);

const PostProcessing = ({
  strength = 1.2,
  threshold = 0.5,
  fullScreenEffect = true,
}: {
  strength?: number;
  threshold?: number;
  fullScreenEffect?: boolean;
}) => {
  const { gl, scene, camera } = useThree();
  const progressRef = useRef({ value: 0 });

  const render = useMemo(() => {
    const postProcessing = new THREE.PostProcessing(gl as any);
    const scenePass = pass(scene, camera);
    const scenePassColor = scenePass.getTextureNode('output');
    const bloomPass = bloom(scenePassColor, strength, 0.5, threshold);

    const uScanProgress = uniform(0);
    progressRef.current = uScanProgress;

    const scanPos = float(uScanProgress.value);
    const uvY = uv().y;
    const scanWidth = float(0.1);
    const scanLine = smoothstep(0, scanWidth, abs(uvY.sub(scanPos)));
    const goldOverlay = vec3(1, 0.76, 0.2).mul(oneMinus(scanLine)).mul(0.3); // BigZo gold color

    const withScanEffect = mix(
      scenePassColor,
      add(scenePassColor, goldOverlay),
      fullScreenEffect ? smoothstep(0.9, 1.0, oneMinus(scanLine)) : 1.0
    );

    const final = withScanEffect.add(bloomPass);
    postProcessing.outputNode = final;

    return postProcessing;
  }, [camera, gl, scene, strength, threshold, fullScreenEffect]);

  useFrame(({ clock }) => {
    progressRef.current.value = (Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5);
    render.renderAsync();
  }, 1);

  return null;
};

const WIDTH = 1400;
const HEIGHT = 800;

const Scene = () => {
  const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src]);
  const meshRef = useRef<Mesh>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (rawMap && depthMap) setVisible(true);
  }, [rawMap, depthMap]);

  const { material, uniforms } = useMemo(() => {
    const uPointer = uniform(new THREE.Vector2(0));
    const uProgress = uniform(0);
    const strength = 0.05;
    const tDepthMap = texture(depthMap);

    const tMap = texture(
      rawMap,
      uv().add(tDepthMap.r.mul(uPointer).mul(strength))
    );

    const aspect = float(WIDTH).div(HEIGHT);
    const tUv = vec2(uv().x.mul(aspect), uv().y);
    const tiling = vec2(60.0);
    const tiledUv = mod(tUv.mul(tiling), 2.0).sub(1.0);
    const brightness = mx_cell_noise_float(tUv.mul(tiling).div(2));
    const dist = float(tiledUv.length());
    const dot = float(smoothstep(0.5, 0.49, dist)).mul(brightness);
    const depth = tDepthMap;
    const flow = oneMinus(smoothstep(0, 0.05, abs(depth.r.sub(uProgress))));
    const mask = dot.mul(flow).mul(vec3(5, 4, 1)); // gold hue for waves

    const final = blendScreen(tMap, mask);

    const material = new THREE.MeshBasicNodeMaterial({
      colorNode: final,
      transparent: true,
      opacity: 0,
    });

    return {
      material,
      uniforms: { uPointer, uProgress },
    };
  }, [rawMap, depthMap]);

  const [w, h] = useAspect(WIDTH, HEIGHT);

  useFrame(({ clock }) => {
    uniforms.uProgress.value = (Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5);
    if (meshRef.current && 'material' in meshRef.current && meshRef.current.material) {
      const mat = meshRef.current.material as any;
      if ('opacity' in mat) {
        mat.opacity = THREE.MathUtils.lerp(mat.opacity, visible ? 0.8 : 0, 0.05);
      }
    }
  });

  useFrame(({ pointer }) => {
    uniforms.uPointer.value = pointer;
  });

  const scaleFactor = 1.0;
  return (
    <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
      <planeGeometry />
    </mesh>
  );
};

export const HeroFuturistic = () => {
  const titleWords = 'BIGZO'.split(' ');
  const subtitle = 'Global hip-hop artist streaming in 135+ countries.';
  const [visibleWords, setVisibleWords] = useState(0);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [delays, setDelays] = useState<number[]>([]);
  const [subtitleDelay, setSubtitleDelay] = useState(0);

  useEffect(() => {
    setDelays(titleWords.map(() => Math.random() * 0.07));
    setSubtitleDelay(Math.random() * 0.1);
  }, [titleWords.length]);

  useEffect(() => {
    if (visibleWords < titleWords.length) {
      const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 200);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => setSubtitleVisible(true), 400);
      return () => clearTimeout(timeout);
    }
  }, [visibleWords, titleWords.length]);

  return (
    <div className="h-screen w-full relative">
      <div className="absolute inset-0 z-10 pointer-events-none px-10 flex flex-col justify-center items-center text-center">
        <div className="text-6xl md:text-8xl xl:text-9xl font-extrabold tracking-widest font-heading">
          <div className="flex space-x-2 overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#f2a900] to-[#ffc333]">
            {titleWords.map((word, index) => (
              <div
                key={index}
                className={index < visibleWords ? 'fade-in' : ''}
                style={{ animationDelay: `${index * 0.1 + (delays[index] || 0)}s`, opacity: index < visibleWords ? undefined : 0, filter: 'drop-shadow(0 0 40px rgba(242,169,0,0.5))' }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm md:text-xl xl:text-2xl mt-4 overflow-hidden text-zinc-400 font-bold max-w-2xl">
          <div
            className={subtitleVisible ? 'fade-in-subtitle' : ''}
            style={{ animationDelay: `${titleWords.length * 0.1 + 0.2 + subtitleDelay}s`, opacity: subtitleVisible ? undefined : 0 }}
          >
            {subtitle}
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        style={{ animation: 'bounce 2s infinite' }}
        onClick={() => {
          document.getElementById('music')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-xs tracking-[0.2em] uppercase font-bold">Scroll to explore</span>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 12L11 17L16 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>

      <Canvas
        flat
        gl={async (props) => {
          const renderer = new THREE.WebGPURenderer({ ...props, antialias: true } as any);
          await renderer.init();
          return renderer;
        }}
        className="w-full h-full absolute inset-0 z-0 bg-black"
      >
        <PostProcessing fullScreenEffect={true} strength={1.5} threshold={0.3} />
        <Scene />
      </Canvas>
    </div>
  );
};

export default HeroFuturistic;
