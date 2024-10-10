import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {AppBar, Box, Toolbar, IconButton, Typography, InputBase, Grid }from '@mui/material/';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Results from './Results';
import NowPlaying from './NowPlaying'
import Landing from "./Landing"
import MovieCard from './MovieCard';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function Navbar() {



  const [searchData, setSearchData] = useState("");
  // const { VITE_TMDB_API_TOKEN } = import.meta.env.VITE_TMDB_API_TOKEN;
  const [movies, setMovies] = useState([]);


  const handleChange = (event) => {
    //update the searchData every time the user changes it
    setSearchData(event.target.value);
    console.log(searchData);
    handleKeyDown(event.target.value);
  };

  const handleKeyDown = (event) => {
    // if(event.metaKey && event.key === 'F4')
    // console.log("running search for: ", searchData);
    if (event.key === "Enter") {
      console.log("Running search for: ", searchData);
      setSearchData("");

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
          Authorization:
          // `Bearer ${VITE_TMDB_API_TOKEN}`
            `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWViYmUyNTg3OThjM2ZiODg5Yzg1NmQ2ZDQwNzExYyIsIm5iZiI6MTcyNzg4Mjk1MC4wMTExMjcsInN1YiI6IjY2ZmQ1NzJiZTI2YTUzYzEyMjU5NjE1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-XredLRT2W3YRD6Bj7ZcpaYU2_rgnBIO0edPiBE70no`,
        }
      };

      axios(options)
        .then((response) => {
          console.log(response.data);
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
          setMovies(movieArray)
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  
  return (
    <>
    <Router>
    <Box sx={{ flexGrow: 1, marginBottom: '15px'}}>
      <AppBar position="static">
        <Toolbar>

          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, mr: 2 }}
            >
            <Link to ="/Landing">DMCA</Link>
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              <Link to ="/NowPlaying">Now Playing</Link>
            </Typography>
          </Box>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchData}
              onChange = {handleChange}
              onKeyDown={handleKeyDown}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>

        <Routes>
          <Route path="/NowPlaying" element={<NowPlaying />} />
          {/* <Route path="/Landing" element={<Landing/>} /> */}
          <Route index element={<Landing />} />
        </Routes>
      </Router>

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