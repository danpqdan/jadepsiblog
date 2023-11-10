import './App.css'
import Navbar from './components/Navbar'
import Sobre from './pages/Sobre'
import Homeimg from './pages/Homeimg'

import bgCute from './assets/cutethaisrosa.jpg'

function App() {
  return (
    <div className='content'>
      <img src={bgCute} alt="" className='bgcute' />
      <div className='home'>
        <Navbar />
        <Sobre />
      </div>
      <Homeimg />

      
    </div>

  )
}

export default App
