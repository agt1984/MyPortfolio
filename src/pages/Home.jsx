import { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber"; //se importa la libreria 3d de react una vez instalada
import Loader from "../components/Loader"; //se importa el cargador 3d

import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

import { soundoff, soundon } from "../assets/icons";
import sakura from "../assets/sakura.mp3";

const Home = () => {
 const audioRef = useRef(new Audio(sakura));
 audioRef.current.volume = 0.4;
 audioRef.current.loop = true;

 const [currentStage, setCurrentStage] = useState(1);
 const [isRotating, setIsRotating] = useState(false);
 const [isPlayingMusic, setIsPlayingMusic] = useState(false);

 useEffect(() => {
   if (isPlayingMusic) {
     audioRef.current.play();
   }

   return () => {
     audioRef.current.pause();
   };
 }, [isPlayingMusic]);

  //en esta parte se ponen los parametros de la posicion de la isla
  const adjustIslandForScreenSize = () => {
    let screenScale = null; //escala
    let screenPosition = [0, -6.5, -43]; //posicion
    let rotation = [0.1, 4.7, 0]; //rotacion

    if (window.innerWidth < 768) {
      //si es menos a x pixels
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation]; //estas dos variables se pasan a la isla como props
  };

  //caracteristicas del avion y su posicion
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      //si es menos a x pixels
      screenScale = [2.5, 2.5, 2.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition]; //estas dos variables se pasan a la isla como props
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      {/* dentro del Canvas, linea de abajo, se renderiza todo el 3d ,
      tambien se establece la posicion de la camara y
      perspectiva*/}

      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        {/* el suspense envuelve todo y renderiza el cargado de pagina */}
        <Suspense fallback={<Loader />}>
          <directionalLight position={[2, 1, 1]} intensity={1.7} />{" "}
          {/* aqui se maneja la ilumanicaion de la isla */}
          <ambientLight intensity={0.5} />{" "}
          {/* aqui se maneja la iluminacion de los objetos de la isla, no proyecta sombra */}
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          {/*<pointLight />*/}{" "}
          {/* luz de un solo punto a multiples direcciones, solo escenatios internos*/}
          {/*<spotLight />*/} {/* luz en un punto como cono */}
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain"
        />
      </div>
    </section>
  );
};

export default Home;
