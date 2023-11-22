import React from 'react'

import './App.css'
import Navbar from './home/components/Navbar'
import Sobre from './home/pages/Sobre'
import Homeimg from './home/pages/Homeimg'

import bgCute from './home/assets/cutethaisrosa.jpg'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



function App() {
  return (
    <Parallax className='content' pages={2} style={{ top: '0', left: '0' }}>
      <ParallaxLayer offset={0} speed={1}>
      <img src={bgCute} alt="" className='bgcute' width={100}/>
        <div className='home'>
          <Navbar/>
          <Sobre/>
          <Homeimg />
          <h1>Ola mundo</h1>
        </div>

      </ParallaxLayer>
      <ParallaxLayer  offset={1} speed={2.5}>
        <div>
          <h1>Meu primeiro parallax</h1>
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default App
