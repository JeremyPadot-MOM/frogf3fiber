import React, { Suspense, useRef } from "react";
import { Canvas, useLoader, useFrame, extend, useThree, } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Sparks from "./Sparks"
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
// import mp3File from "models/frogewizard.mp3";
// import { softShadows } from "drei"
import "./App.css";

extend({ OrbitControls });
// const Player = () => (
  // <AudioPlayer
  //   autoPlay
  //   src= "frogewizard.mp3"
  //   onPlay={e => console.log("onPlay")}
    // other props here
    
  // />
// );


// softShadows({ size: 0.005, frustrum: 2.75 })

function Loading() {
  return (
    <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        opacity={0.6}
        roughness={1}
        metalness={0}
      />
     </mesh>
  );
}
function Magic() {
  const group = useRef();
  useFrame(state => {
    group.current.position.y = ((1 + Math.sin(state.clock.getElapsedTime())) / 2) * 14
    group.current.rotation.y += 0.06
  })
  const { nodes } = useLoader(GLTFLoader, "models/magic.glb");
  return (
    <group ref={group}>
    <mesh visible geometry={nodes.mesh_0.geometry} rotation={[2, 2, 2]}>
    <meshStandardMaterial
    attach="material"
    color="purple"
    // roughness={0.3}
    // metalness={0.3}
    />
    </mesh>
    </group>
  )
}
function Magic2() {
  const group = useRef();
  useFrame(state => {
    group.current.position.y = ((1 + Math.sin(state.clock.getElapsedTime())) / 2) * 12
    group.current.rotation.y += 0.07
  })
  const { nodes } = useLoader(GLTFLoader, "models/magic.glb");
  return (
    <group ref={group}>
    <mesh visible geometry={nodes.mesh_0.geometry} rotation={[2, 2, 2]}>
    <meshStandardMaterial
    attach="material"
    color="limegreen"
    // roughness={0.3}
    // metalness={0.3}
    />
    </mesh>
    </group>
  )
}
function Magic3() {
  const group = useRef();
  useFrame(state => {
    group.current.position.y = ((1 + Math.sin(state.clock.getElapsedTime())) / 2) * 13
    group.current.rotation.y += 0.08
  })
  const { nodes } = useLoader(GLTFLoader, "models/magic.glb");
  return (
    <group ref={group}>
    <mesh visible geometry={nodes.mesh_0.geometry} rotation={[1, 1, 4]}>
    <meshStandardMaterial
    attach="material"
    color="turquoise"
    // roughness={0.3}
    // metalness={0.3}
    />
    </mesh>
    </group>
  )
}
function F3f() {
    // const mouse = useRef([0, 0])
  const group = useRef();
  
  //testing below doesnt seem to change much, rotates faster?
// useFrame(state => {
//     group.current.position.y = ((1 + Math.sin(state.clock.getElapsedTime())) / 2) * 2
//     group.current.rotation.y += 0.01
//   })
  //testing above
  const { nodes } = useLoader(GLTFLoader, "models/f3f13.glb");
  console.log(nodes);
  // useFrame(() => {
  //   group.current.rotation.y += 0.004;
    
  // });     //removing rotation for now
  return (
    <group ref={group}>
      <mesh visible geometry={nodes.mesh_0.geometry}>
        <meshStandardMaterial
          attach="material"
          color="orange"
          roughness={0.3}
          metalness={0.3}
          
        />
        
      </mesh>
    </group>
  );
}
const CameraControls = () => {
  const {
    
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (<orbitControls 
  ref={controls} 
  args={[camera, domElement]} 
  // enableZoom={false} probably want to zoom, try both ways
  maxAzimuthAngle={Math.PI / 4 }
  maxPolarAngle={Math.PI}
  minAzimuthAngle={-Math.PI / 4}
  minPolarAngle={0}
  />
  
  );
};
// 


export default function App() {
  return (
    
    
      <Canvas style={{ background: "grey" }}>
      
      <CameraControls />
        <directionalLight
        castShadow
        position={[50, 20, -5]}
        intensity={1.5}
        // shadow-mapSize-width={1024}
        // shadow-mapSize-height={1024}
        // shadow-camera-far={100}
        // shadow-camera-left={-10}
        // shadow-camera-right={30}
        // shadow-camera-top={10}
        // shadow-camera-bottom={-10}
        />
        
        <Sparks count={20} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
        <Suspense fallback={<Loading />}>
          <F3f />
          <Magic />
          <Magic2 />
          <Magic3 />
        </Suspense>
      </Canvas>
      );
      }
