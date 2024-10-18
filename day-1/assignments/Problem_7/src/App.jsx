import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FetchData from './components/FetchData'
import MouseMovement from './components/MouseMovement'
import UpdateTitle from './components/UpdateTitle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>React useEffect</h1>

        <section>
          <h2>Fetch Data from API</h2>
          <FetchData/>
        </section>
        <section>
          <h2>Mouse Movement Event</h2>
          <MouseMovement/>
        </section>
        <section>
          <h2>Update Document Title</h2>
          <UpdateTitle/>
        </section>

      </div>
      
    </>
  )
}

export default App
