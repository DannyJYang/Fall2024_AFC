import { useState, useEffect } from 'react'
import './App.css'

function App() {


  const [count, setCount] = useState(0)
  // setCount(count + 1)
  useEffect( () => {
    if(count < 5) {
      setCount(count + 1)
    }
  }, [count])  //empty bracket makes it so that useEffect only runs once
          //inside the bracket is the dependency list

  return (
    <>
    <h1>NY Counter Demo</h1>
      Count: {count}
      <p>Hello World</p>
      <p>Another coding project?</p>
      <p>That's pretty cool</p>
      <h3>[Adult Swim]</h3>
    </>
  )
}

export default App
