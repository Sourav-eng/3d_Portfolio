import { Canvas, useFrame } from "@react-three/fiber"

import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Astronaut } from "../components/Astronaut"
import { Float,  Loader,  OrbitControls } from "@react-three/drei"
import { useMediaQuery } from "react-responsive"
import { easing } from "maath"
import { Suspense } from "react"


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="flex items-center justify-center md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>

        <Canvas camera={{ position: [1, 1, 3] }}>
          <Suspense >
            <Float>
              <Astronaut scale={isMobile && .23} position={isMobile && [1.5, -1.5, 0]} />
              <OrbitControls enableZoom={false}/>
            </Float>

            <Rig />
          </Suspense>

        </Canvas>
        <Loader/>

      </figure>
    </section>
  )

  function Rig() {
    return useFrame((state, delta) => {
      easing.damp3(state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y / 10, 3], 0.5, delta)
    })
  }
}

export default Hero
