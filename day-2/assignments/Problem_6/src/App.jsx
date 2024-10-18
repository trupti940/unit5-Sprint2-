import React from 'react';
import FocusInput from './components/FocusInput'
import UncontrolledInput from './components/UncontrolledInput'
import ChangeBg from './components/ChangeBg'
import './App.css'

const App = () => {
  return (
    <div>
      <h1>useRef Hook </h1>

      <h2>Focusable Input</h2>
      <FocusInput/>

      <h2>Uncontrolled Input</h2>
      <UncontrolledInput/>

      <h2>Change Background</h2>
      <ChangeBg/>
    </div>
  )
}
  


export default App
