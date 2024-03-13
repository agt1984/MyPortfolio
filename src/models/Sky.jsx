import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber' //usamos la libreria para que ocurra la rotacion

import skyScene from '../assets/3d/sky.glb' //importamos el cielo

const Sky = ({ isRotating }) => { //le decimos al cielo que rote
  const sky = useGLTF(skyScene);
  const skyRef = useRef();

  //use frame para la rotacion
  useFrame((_, delta) => {
    if(isRotating){
      skyRef.current.rotation.y += 0.15 * delta //formula que hace rotar el cielo
    }
  })

  return (
    <mesh ref={skyRef}>
        <primitive object={sky.scene} />
    </mesh>
  )
}

export default Sky