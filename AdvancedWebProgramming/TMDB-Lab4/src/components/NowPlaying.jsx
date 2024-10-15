import { useState } from "react";
import { Grid } from "@mui/material/";
import axios from "axios";
import MovieCard from "./MovieCard";

export default function NowPlaying() {
  const { VITE_TMDB_API_TOKEN } = import.meta.env.VITE_TMDB_API_TOKEN;
  const baseURL = `https://api.themoviedb.org/3`;
  const [movies, setMovies] = useState([]);
  const [searchData, setSearchData] = useState("");

  const showNowPlaying = () => {
    //Scaffolding
    let route = "movie/now_playing";
    let endpoint = `${baseURL}/${route}`;
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing",
      params: { inlcude_adult: 'fase', language: "en-US", page: "1" },
      headers: {
        accept: "application/json",
        Authorization: 
        // `Bearer ${VITE_TMDB_API_TOKEN}`,
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWViYmUyNTg3OThjM2ZiODg5Yzg1NmQ2ZDQwNzExYyIsIm5iZiI6MTcyNzg4Mjk1MC4wMTExMjcsInN1YiI6IjY2ZmQ1NzJiZTI2YTUzYzEyMjU5NjE1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-XredLRT2W3YRD6Bj7ZcpaYU2_rgnBIO0edPiBE70no'
      },
    };
    axios(options)
      .then((response) => {
        console.log(response);
        //response.data.results => array of movie objects
        let movieArray = response.data.results.map((movie) => {
          return (
            <Grid item xs={3}>
              <MovieCard
                film={movie}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                }}
              />
            </Grid>
          );
        });
        setMovies(movieArray);
      })
      .catch((error) => console.log(error));
  };

  useState(() => {
    showNowPlaying();
  }, []);

  return (
    <>
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
