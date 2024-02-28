import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber' //se importa la libreria 3d de react una vez instalada
import Loader from '../components/Loader'   //se importa el cargador 3d
import { Island } from '../models/Island'

{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
      </div> */}

const Home = () => {
  return (
    <section className='w-full h-screen relative'>
      {/* dentro del Canvas, linea de abajo, se renderiza todo el 3d ,
      tambien se establece la posicion de la camara y
      perspectiva*/}
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }} 
      >
        {/* el suspense envuelve todo y renderiza el cargado de pagina */}
        <Suspense fallback={<Loader />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Island/>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home