// Foundation
import { personObj, greeting } from './helper'
import { useState } from 'react'
import './App.css'

function App() {
  // const [fname, setFname] = useState("Dan da Man")
  // const [age, setAge] = useState(99)
  // const [pw, setPw] = useState("")

  // const personObj = {
  //   fname: "Dan da Man",
  //   age: 25,
  //   pw: ""
  // }
  const [person, setPerson] = useState(personObj)

  // const [person, setPerson] = useState({
  //   fname: "Dan da Man",
  //   age: 25,
  //   pw: ""
  // })




  return (
    <form action="/getdata" method="get">
      <h1>{greeting}</h1>
      <label>
        First Name:
        <input type="text" name="" id="" />
      </label>

      <label>
        Age:
        <input type="number" name="" id="" />
      </label>

      <label>
        Password:
        <input type="password" name="" id="" />
      </label>

      <button type="submit">Submit</button>

    </form>
  )
}

export default App
