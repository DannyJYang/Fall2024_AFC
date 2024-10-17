import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material/';
import axios from 'axios';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';


export default function Results({ searchData, setErrorMessage }) {
    const VITE_TMDB_API_TOKEN = process.env.VITE_TMDB_API_TOKEN;
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();

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
            console.log(response)
            if(response.data.total_results <= 0) {
                setErrorMessage("No results found!")
                navigate('/Error')
            }
          const movieArray = response.data.results.map((movie) => (
            <Grid item xs={3} key={movie.id}>
              <MovieCard film={movie} />
            </Grid>
          ));
          setMovies(movieArray);
        })
        .catch((error) => {
          console.error(error);
        console.log("data type: ", typeof error.request.status)
          if(error.request.status === 401) {
            setErrorMessage("Unauthorized Request! Check your Token!")
            navigate('/Error')
        }
        });
    }

  }, [searchData, VITE_TMDB_API_TOKEN]);

  return (
    <Grid container spacing={3} sx={{ justifyContent: "space-around", alignItems: "flex-start" }}>
      {movies}
    </Grid>
  );
}
