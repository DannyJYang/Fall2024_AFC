import { useState } from "react";

// import './App.css'

function App() {
  const initPerson = {
    fname: "",
    lname: "",
    age: 21
  }
  const [personData, setPersonData] = useState(initPerson);
  // const [personData, setPersonData] = useState({});

  const handleChange = (event) => {
    setPersonData({ ...personData, [event.target.name]: event.target.value });
    // console.log(personData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sending Data: ", personData);
    setPersonData(initPerson)
  };

  return (
    <>
      {/* Submission of the form */}
      <h2>[Adult Swim]</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">
          First Name
          <input
            type="text"
            name="fname"
            id="fname"
            value={personData.fname}
            onChange={handleChange}
            required
            minLength={2}
            maxLength={5}
            autoComplete="off"
          />
        </label>
        <br />
        <label htmlFor="lname">
          Last Name
          <input
            type="text"
            name="lname"
            id="lname"
            value={personData.lname}
            onChange={handleChange}
            maxLength={5}
            autoComplete="off"
          />
        </label>
        <br />
        <label htmlFor="age">
          Age
          <input
            type="number"
            name="age"
            id="age"
            value={personData.age}
            min={21}
            max={100}
            onChange={handleChange}
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </>
  );
}

export default App;
