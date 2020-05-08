import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";

import "./App.css";

function KeyLight({ brightness, color }) {
  return (
    <rectAreaLight
      width={3}
      height={3}
      color={color}
      intensity={brightness}
      position={[-2, 0, 5]}
      lookAt={[0, 0, 0]}
      penumbra={1}
      castShadow
    />
  );
}
// Geometry
function GroundPlane() {
  return (
    <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}
function BackDrop() {
  return (
    <mesh receiveShadow position={[0, -1, -5]}>
      <planeBufferGeometry attach="geometry" args={[500, 500]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function Sphere() {
  return (
    <mesh
      visible
      userData={{ test: "hello" }}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
      castShadow
    >
      <sphereGeometry attach="geometry" args={[1, 16, 16]} />
      <meshStandardMaterial
        attach="material"
        color="white"
        transparent
        roughness={0.1}
        metalness={0.1}
      />
    </mesh>
  );
}

function App() {
  return (
    <Canvas>
      <KeyLight brightness={10} color={"white"} />
      <Sphere />
      <BackDrop />
      <GroundPlane />
    </Canvas>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);