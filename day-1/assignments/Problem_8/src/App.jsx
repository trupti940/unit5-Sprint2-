import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Timer from './components/Timer'
import Scroll from './components/Scroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Timer/>
      <Scroll/>
      
    </>
  )
}

export default App
