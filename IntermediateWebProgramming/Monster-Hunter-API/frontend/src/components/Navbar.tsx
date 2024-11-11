import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import {AppBar, Box, Toolbar, IconButton, Typography, InputBase, TextField, Autocomplete, Grid} from '@mui/material/';
import monsterNameAutoComplete from '../helper.ts'
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom";
import {FormEvent, useEffect, useState} from "react";
import MonsterHunterLogo from "../assets/Monster-Hunter-Emblem.png"
import MonsterHunterLogoWhite from "../assets/Monster-Hunter-Emblem-White.png"
import MusicPlayer from "./MusicPlayer.tsx";

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

export default function Navbar({searchInput, setSearchInput}) {
    const navigate = useNavigate();
    const [localInput, setLocalInput] = useState("");

    // @ts-ignore
    const handleSearchInput = (event: React.ChangeEvent<{}>, newValue: string) => {
        setLocalInput(newValue)
        setSearchInput(newValue)
    }

    // @ts-ignore
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky" style={{marginBottom: "3vh"}}>
                <Toolbar>
                    <Box sx={{display: 'flex', flexGrow: .5}}>
                        <Typography variant="h6" noWrap component="div" sx={{mr: 2, color: 'white'}}>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{mr: 1, marginTop: "6px"}}
                                        onClick={() => navigate('./LandingPage')}>
                                <img src={MonsterHunterLogoWhite} alt="Monster Hunter Logo"
                                     style={{width: '96px', height: "auto"}}/>
                            </IconButton>
                        </Typography>
                        <Typography variant="h6" noWrap component="div">
                            <h3 onClick={() => navigate('./FavoritePage')} style={{cursor: "pointer"}}>Favorites</h3>
                        </Typography>
                        <Grid sx={{marginLeft: "25px"}}>
                            <MusicPlayer
                                sx={{justifySelf: 'center', marginTop: '5px'}}
                            />
                        </Grid>
                    </Box>

                    <Search>
                        <Autocomplete
                            value={localInput}
                            onChange={handleSearchInput}
                            disablePortal
                            options={monsterNameAutoComplete}
                            sx={{width: 400}}
                            renderInput={(params) => <TextField {...params} label="Search Monster Here"/>}
                            onKeyDown={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    setLocalInput("")
                                    navigate('./SearchPage')
                                }
                            }}
                        />
                    </Search>

                    {/*spacer for search*/}
                    <Box sx={{flexGrow: 1}}/>

                    <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                        <Typography variant="h6" noWrap component="div">
                            <h3 style={{marginRight: "10px", fontFamily: "Cinzel"}}>Monster Killer API</h3>
                        </Typography>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}