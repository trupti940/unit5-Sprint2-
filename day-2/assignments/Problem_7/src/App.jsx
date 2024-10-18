import { useState } from 'react'
import DynamicForm from './components/DynamicForm';
import ValidationForm from './components/ValidationForm'
import SubmitForm from './components/SubmitForm';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Dynamic Form</h2>
      <DynamicForm/>
      <h2>Validation Form</h2>
      <ValidationForm/>
      <h2>Submit Form</h2>
      <SubmitForm/>
    </>
  )
}

export default App
