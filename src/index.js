// import React from "react";
// import ReactDOM from "react-dom";
// import { Canvas } from "react-three-fiber";

// import "./App.css";

// // Geometry
// function GroundPlane() {
//   return (
//     <mesh receiveShadow rotation={[5, 0, 0]} position={[0, -1, 0]}>
//       <planeBufferGeometry attach="geometry" args={[500, 500]} />
//       <meshStandardMaterial attach="material" color="white" />
//     </mesh>
//   );
// }
// function BackDrop() {
//   return (
//     <mesh receiveShadow position={[0, -1, -5]}>
//       <planeBufferGeometry attach="geometry" args={[500, 500]} />
//       <meshStandardMaterial attach="material" color="white" />
//     </mesh>
//   );
// }
// function Sphere() {
//   return (
//     <mesh
//       visible
//       userData={{ test: "hello" }}
//       position={[0, 0, 0]}
//       rotation={[0, 0, 0]}
//       castShadow
//     >
//       <sphereGeometry attach="geometry" args={[1, 16, 16]} />
//       <meshStandardMaterial
//         attach="material"
//         color="white"
//         transparent
//         roughness={0.1}
//         metalness={0.1}
//       />
//     </mesh>
//   );
// }

// // Lights
// function KeyLight({ brightness, color }) {
//   return (
//     <rectAreaLight
//       width={3}
//       height={3}
//       color={color}
//       intensity={brightness}
//       position={[-2, 0, 5]}
//       lookAt={[0, 0, 0]}
//       penumbra={1}
//       castShadow
//     />
//   );
// }
// function FillLight({ brightness, color }) {
//   return (
//     <rectAreaLight
//       width={3}
//       height={3}
//       intensity={brightness}
//       color={color}
//       position={[2, 1, 4]}
//       lookAt={[0, 0, 0]}
//       penumbra={2}
//       castShadow
//     />
//   );
// }

// function RimLight({ brightness, color }) {
//   return (
//     <rectAreaLight
//       width={2}
//       height={2}
//       intensity={brightness}
//       color={color}
//       position={[1, 4, -2]}
//       rotation={[0, 180, 0]}
//       castShadow
//     />
//   );
// }
// function App() {
//   return (
//     <Canvas className="canvas">
//       <GroundPlane />
//       <BackDrop />
//       <KeyLight brightness={5.6} color={"#ffbdf4"} />
//       <FillLight brightness={2.6} color={"#bdefff"} />
//       <RimLight brightness={54} color={"#fff"} />
//       <Sphere />
//     </Canvas>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

// watching blender tutorial on character modeling - plan to import character in place of primitive shape
// drawing front and side prototypes for character model 
// finished illustrations of proto character models, front and side looking right
// import React, { Suspense, useRef } from "react";
// import { Canvas, useLoader, useFrame } from "react-three-fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import "./App.css";

// function Loading() {
//   return (
//     <mesh visible position={[0, 0, 0]} rotation={[0, 0, 0]}>
//       <sphereGeometry attach="geometry" args={[1, 16, 16]} />
//       <meshStandardMaterial
//         attach="material"
//         color="white"
//         transparent
//         opacity={0.6}
//         roughness={1}
//         metalness={0}
//       />
//     </mesh>
//   );
// }

// function F3f() {
//   const group = useRef();
//   const { nodes } = useLoader(GLTFLoader, "models/f3f1.glb");
//   useFrame(() => {
//     group.current.rotation.y += 0.004;
//   });
//   return (
//     <group ref={group}>
//       <mesh visible geometry={nodes.Default.geometry}>
//         <meshStandardMaterial
//           attach="material"
//           color="white"
//           roughness={0.3}
//           metalness={0.3}
//         />
//       </mesh>
//     </group>
//   );
// }

// export default function App() {
//   return (
//     <Canvas style={{ background: "#171717" }}>
//       <directionalLight intensity={0.5} />
//       <Suspense fallback={<Loading />}>
//         <F3f />
//       </Suspense>
//     </Canvas>
//   );
// }
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  
  
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);