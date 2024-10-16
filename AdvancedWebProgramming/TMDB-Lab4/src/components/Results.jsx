import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material/';
import axios from 'axios';
import MovieCard from './MovieCard';

export default function Results({ searchData }) {
    const VITE_TMDB_API_TOKEN = process.env.VITE_TMDB_API_TOKEN;
    const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (searchData) {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          query: searchData,
          include_adult: 'false',
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
        }
      };

      axios(options)
        .then((response) => {
          const movieArray = response.data.results.map((movie) => (
            <Grid item xs={3} key={movie.id}>
              <MovieCard film={movie} />
            </Grid>
          ));
          setMovies(movieArray);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    
  }, [searchData, VITE_TMDB_API_TOKEN]);

  return (
    <Grid container spacing={3} sx={{ justifyContent: "space-around", alignItems: "flex-start" }}>
      {movies}
    </Grid>
  );
}
