import {useState}  from 'react'
import { Grid }from '@mui/material/';


export default function Results(userInput) {
  const [searchData, setSearchData] = useState(userInput);
  const { VITE_TMDB_API_TOKEN } = process.env.VITE_TMDB_API_TOKEN;
  const [movies, setMovies] = useState([]);

  return (
    <>
      <h1>I am in results!</h1>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: "space-around", alignItems: "flex-start" }}
      >
        {movies}
      </Grid>
    </>
  );
}
