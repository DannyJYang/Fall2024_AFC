import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {AppBar, Box, Toolbar, IconButton, Typography, InputBase, TextField, Autocomplete} from '@mui/material/';
import monsterNameAutoComplete from '../helper.ts'
// import Badge from '@mui/material/Badge';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
import {useNavigate} from "react-router-dom";
// import {Icon} from "@mui/material";
// import LandingPage from "./pages/LandingPage.tsx";
import {useState} from "react";
import MonsterHunterLogo from "../assets/Monster-Hunter-Emblem.png"

const Search = styled('div')(({ theme }) => ({
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

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//     color: 'inherit',
//     '& .MuiInputBase-input': {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//         transition: theme.transitions.create('width'),
//         width: '100%',
//         [theme.breakpoints.up('md')]: {
//             width: '20ch',
//         },
//     },
// }));


export default function Navbar({searchInput, setSearchInput}) {
    const navigate = useNavigate();
    const [localInput, setLocalInput] = useState("");
    // @ts-ignore
    const handleSearchInput = (event: any, newValue: string) => {
        setLocalInput(newValue)
        setSearchInput(newValue)
        // console.log(newValue)
    }

    // @ts-ignore
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <Box sx={{ display: 'flex', flexGrow: 1 }}>
                        <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
                            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 1, marginTop:"6px" }} onClick={() => navigate('./LandingPage')}>
                                <img src={MonsterHunterLogo} alt="Monster Hunter Logo" style={{width: '96px', height: "auto"}} />
                            </IconButton>
                        </Typography>
                        <Typography variant="h6" noWrap component="div">
                            <h3 onClick={() => navigate('./FavoritePage')} style={{ cursor: "pointer" }}>Favorites</h3>
                        </Typography>
                    </Box>

                    <Search>
                        {/*<SearchIconWrapper>*/}
                        {/*    <SearchIcon />*/}
                        {/*</SearchIconWrapper>*/}
                        {/*<StyledInputBase*/}
                        {/*    placeholder="Search Monster Here"*/}
                        {/*    inputProps={{ 'aria-label': 'search' }}*/}
                        {/*    // value={searchInput}*/}
                        {/*    onChange={handleSearchInput}*/}
                        {/*    value={localInput}*/}
                        {/*    onKeyDown={(event) => {*/}
                        {/*        if(event.key === 'Enter') {*/}
                        {/*            event.preventDefault();*/}
                        {/*            setLocalInput("")*/}
                        {/*            navigate('./SearchPage')*/}
                        {/*    }}}*/}
                        {/*/>*/}
                        <Autocomplete
                            value={localInput}
                            onChange={handleSearchInput}
                            disablePortal
                            options={monsterNameAutoComplete}
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Search Monster Here" />}
                            onKeyDown={(event) => {
                                if(event.key === 'Enter') {
                                    event.preventDefault();
                                    setLocalInput("")
                                    navigate('./SearchPage')
                                }}}
                        />
                    </Search>

                    {/*spacer for search*/}
                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Typography variant="h6" noWrap component="div">
                            <h3 style={{marginRight: "15px" }}>Monster Killer API</h3>
                        </Typography>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}