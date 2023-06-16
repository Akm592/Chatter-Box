import React, { useCallback } from 'react' 
import Particles from 'react-particles'
import ParticlesConfig from '../utils/ParticlesConfig'
import {Engine} from "tsparticles-engine"
import {loadFull } from "tsparticles"

function Background() {
const particlesInit = useCallback(async (engine)=>{
  console.log("engine", engine)
  await loadFull(engine)

}, [])

const particlesLoaded = useCallback(async (container) => {
  console.log("container", container)
}, [])
  return (
    <div className='bg'>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
      />
    </div>

  )
}

export default Background