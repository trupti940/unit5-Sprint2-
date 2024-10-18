import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Simple Counter App</h1>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick = {() => setCount(count - 1)}>Decrement</button>

    </div>
  )
      
}

export default App
