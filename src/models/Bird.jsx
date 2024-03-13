import { useRef, useEffect } from "react";

import birdScene from "../assets/3d/bird.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef); //libreria para usar la animacion

  useEffect(() => {
    // se utilizan las animaciones
    actions["Take 001"].play(); //le digo que vuele el pajarito
  }, []);

  useFrame(({clock, camera}) => {
    //actualiza la posicion del pajaro para simular su vuelo
    //Actuliza la posicion y del vuelo en onda seno "matematica", sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2
    
    //chequear si el pajaro llego a un cierto punto final relativo a la camara
    if(birdRef.current.position.x > camera.position.x + 10) { //fuera de camara
      //cambiar la direccion hacia atras y rotar el pajaro 180 grados
      birdRef.current.rotation.y = Math.PI;
    } else if(birdRef.current.position.x < camera.position.x - 10) {
      //cambiar la direccion hacia adelante y resetear la rotacion del pajaro
      birdRef.current.rotation.y = 0;
    }

    //actualizar la posicion x y z basada en la direccion
    if(birdRef.current.rotation.y === 0) { //rotacion en y, z
      //moverse hacia adelante
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    } else {
      //moverse hacia atras
      birdRef.current.position.x -= 0.01;
      birdRef.current.position.z += 0.01;
    }

  });

  return (
    <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]} ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
