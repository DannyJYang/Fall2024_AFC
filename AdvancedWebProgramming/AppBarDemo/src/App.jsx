import { useState } from 'react'
import NavBar from './components/Navbar'

// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>[Adult Swim]</h2>
      <NavBar />
    </>
  )
}

export default App
