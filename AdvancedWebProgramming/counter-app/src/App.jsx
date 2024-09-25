import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [days, setDays] = useState(303);
  return (
    <div className="App">
      <h1>Birthday Party Count Down App</h1>
      <div className="card">
        <button onClick={() => setDays((days) => days - 1)}>
          Days remaining until Jon's Birthday are: {days}
        </button>
      </div>
    </div>
  );
}

export default App
