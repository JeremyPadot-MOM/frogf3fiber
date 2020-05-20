import React, { Suspense, useRef, useState } from "react";
import { Canvas, Dom, useLoader, useFrame, extend, useThree, useEffect } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Hotkeys from 'react-hot-keys';
import Particles from './Particles';
import Effects from './Effects';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import lerp from 'lerp';
import MainScene from './Scene'
import DeadGoblins from './DeadGoblins'
import Sparks from "./Sparks"
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
// import mp3File from "models/frogewizard.mp3";
import { softShadows } from "drei"
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

softShadows({ size: 0.005, frustrum: 2.75 })

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

const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls 
      ref={controls} 
      args={[camera, domElement]} 
      // enableZoom={false} probably want to zoom, try both ways
      maxAzimuthAngle={Math.PI / 4 }
      maxPolarAngle={Math.PI}
      minAzimuthAngle={-Math.PI / 4}
      minPolarAngle={0}
      enableKeys={false}
    />
  );
};


export default function App() {
  const [keyPress, setKeyPress] = useState()

  const onKeyUp = (keyName, e, handle) => {
    console.log("onKeyUp", e, handle)
    // setKeyUp({
    //   output: `onKeyUp ${keyName}`,
    // });
    setKeyPress(null)
  }

  const onKeyDown = (keyName, e, handle) => {
    console.log("onKeyDown", keyName, e, handle)
    // setKeyDown({
    //   output: `onKeyDown ${keyName}`,
    // });
    // console.log('e', e)
    // Key controls
    setKeyPress(keyName)
  }

  return (
    <Hotkeys 
      keyName="up,down,left,right" 
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
    >
      <Canvas>
        <CameraControls />
        <ambientLight intensity={1} />
        <directionalLight
          castShadow
          //position was 50, 40, -5 pre edit
          position={[0, 20, -5]}
          intensity={1.2}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={100}
          shadow-camera-left={-10}
          shadow-camera-right={30}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <fog attach="fog" intensity={3} args={['white', 50, 190]} />
        <pointLight distance={100} intensity={1} color="lightblue" />
        <unrealBloomPass attachArray="passes" args={[ 1, 20, 10, 10]} />
          {/* <Effects down={down} /> */}
        <Particles count={ 450 } />
        <Sparks count={29} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
        <Suspense fallback={<Loading />}>
          <MainScene position={[-5.6, -6, -13]} rotation={[0.30, 5.2, 0]}/>
          <DeadGoblins keyPress={keyPress} position={[-3, -8, -3]}/>
          <DeadGoblins keyPress={keyPress} position={[1, -13, 0]} computerControlled={true} />
          {/* <DeadGoblins position={[10, -10, 0]} /> */}
          {/* <Magic />
          <Magic2 />
          <Magic3 /> */}
        </Suspense>
      </Canvas>
    </Hotkeys>
  );
}

//alt camera angles:
 //alt camera controls:
          // <MainScene position={[0, -9, -13]} rotation={[0, 5.3, 0]}/>
          // <DeadGoblins keyPress={keyPress} position={[5, -9, -5]}/>
          // <DeadGoblins keyPress={keyPress} position={[1, -13, 0]} computerControlled={true} />




          //PRE EDIT 
//            <unrealBloomPass attachArray="passes" args={[ 2, 1, 10]} />
//           {/* <Effects down={down} /> */}
//         <Particles count={ 400 } />
//         <Sparks count={29} colors={['#A2CCB6', '#FCEEB5', '#EE786E', '#e0feff', 'lightpink', 'lightblue']} />
//         <Suspense fallback={<Loading />}>
//           <MainScene position={[0, -9, -13]} rotation={[0, -2, 0]}/>
//           <DeadGoblins keyPress={keyPress} position={[0, -9, 0]}/>
//           <DeadGoblins keyPress={keyPress} position={[1, -13, 0]} computerControlled={true} />
//           {/* <DeadGoblins position={[10, -10, 0]} /> */}
//           {/* <Magic />
//           <Magic2 />
//           <Magic3 /> */}
//         </Suspense>
//       </Canvas>
//     </Hotkeys>
//   );
// }