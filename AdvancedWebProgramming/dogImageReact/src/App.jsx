import { useState, useEffect } from "react";
import axios from "axios";
import DogImageCard from "./components/DogImageCard";
import {Stack, Button} from "@mui/material"

import "./App.css";

const App = () => {
  //consuming an API
  //http request
  //User cllicks a button
  //Get a random dog image

  //http requests using fetch if you don't want to install Axios. Fetch is built into JS.
  //1)Utilize an Endpoint
  //fetch(endpoint)
  //.then(response)   2.Get a response - parse if good, else throw error
  //.then(parsedData) 3.do something with data
  //.catch(error)     4. Handle errors

  //Axios procedures
  // axios.method(endpoint)
  // .then(response)
  // .catch(error)

  const [dogImage, setDogImage] = useState("");

  const endpoint = "https://dog.ceo/api/breeds/image/random";
  const getPicture = () => {
    axios
      .get(endpoint)
      .then((response) => setDogImage(response.data.message))
      .catch((error) => {
        console.error("Error: ", error.message);
      });
  };

  const handleClick = () => {
    console.log("cluck");
    getPicture();
  };

  useEffect(() => {
    getPicture();
  }, []);

  return (
    <>
      <h1>Doggo Image Generator</h1>
      <div className="row">
        <DogImageCard imagePath={dogImage} />
      </div>
      <button onClick={handleClick}>Handel this you scoundrel</button>

      <Stack direction="row" spacing={2}>
        <Button size="large"variant="contained" color="info">Secondary</Button>
        <Button size="small" variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
      </Stack>
    </>
  );
};

export default App;
