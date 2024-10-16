import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { AppBar, Box, Toolbar, Typography, InputBase } from '@mui/material/';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

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

export default function Navbar({ searchData, setSearchData }) {
  const navigate = useNavigate();

  const handleChange = (event) => {
    if(searchData === "") {
      navigate('/NowPlaying');
    }
    setSearchData(event.target.value);
    navigate('/Results');
  };

  // const handleKeyDown = (event) => {
  //   if (event.key === "Enter" && searchData) {
  //     navigate('/Results');
  //   }
  // };

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '40px' }}>
      <AppBar position="sticky">
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              <h3 onClick={() => navigate('./Landing')} style={{ cursor: "pointer" }}>Home</h3>
            </Typography>
            <Typography variant="h6" noWrap component="div">
              <h3 onClick={() => navigate('./NowPlaying')} style={{ cursor: "pointer" }}>Now Playing</h3>
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
              onChange={handleChange}
              // onKeyDown={handleKeyDown}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
