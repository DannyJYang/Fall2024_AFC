import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";

export default function Results(search) {
  const { VITE_TMDB_API_TOKEN } = import.meta.env.VITE_TMDB_API_TOKEN;
  const baseURL = `https://api.themoviedb.org/3`;
  const [movies, setMovies] = useState([]);
  const [searchData, setSearchData] = useState("");
  const location = useLocation();
  const query = location.state?.query || "";
  setSearchData(search);

  useEffect(() => {
    const fetchMovies = async () => {
      if (query.trim()) {
        try {
          const options = {
            method: "GET",
            url: "https://api.themoviedb.org/3/search/movie",
            params: {
              query: query,
              include_adult: "false",
              language: "en-US",
              page: "1",
            },
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`,
              // `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWViYmUyNTg3OThjM2ZiODg5Yzg1NmQ2ZDQwNzExYyIsIm5iZiI6MTcyNzg4Mjk1MC4wMTExMjcsInN1YiI6IjY2ZmQ1NzJiZTI2YTUzYzEyMjU5NjE1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-XredLRT2W3YRD6Bj7ZcpaYU2_rgnBIO0edPiBE70no`,
            },
          };

          const response = await axios(options);
          const movieArray = response.data.results.map((movie) => (
            <Grid item xs={3} key={movie.id}>
              <MovieCard film={movie} />
            </Grid>
          ));
          setMovies(movieArray);
        } catch (error) {
          console.log(error);
        }
      }
    };
    fetchMovies();
  }, [query, VITE_TMDB_API_TOKEN]);

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
