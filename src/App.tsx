import './App.css'
import Navbar from './components/Navbar'
import Sobre from './components/Sobre'
import Homeimg from './pages/Homeimg'

function App() {
  return (
    <div className='content'>
      <div className='home'>
        <Navbar />
        <Sobre />
      </div>

      <Homeimg />
    </div>

  )
}

export default App
