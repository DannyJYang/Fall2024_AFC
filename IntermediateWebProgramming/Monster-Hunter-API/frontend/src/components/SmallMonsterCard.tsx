import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material/';
import MonsterHunterEmblem from "../assets/Monster-Hunter-Emblem.png"
import {Monster} from "./type.ts";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from "@mui/icons-material/Star";
import {Grid} from "@mui/material";
import {updateFavoriteStatus, getFavoriteStatus} from "./monsterService.ts";
import {useEffect, useState} from "react";
import * as React from "react";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {useNavigate} from "react-router-dom";


const SmallMonsterCard: Monster = ({monster, setSearchInput}) => {
    let imageRoute = `../src/assets/icon/${monster.id}_icon.webp`
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    useEffect(() => {
        const fetchFavoriteStatus = async () => {
            const status: any = await getFavoriteStatus(monster.id);
            console.log(status)
            setIsFavorite(status);
        }
        fetchFavoriteStatus();
    }, [monster.id, isFavorite])

    // const favoriteIconDecider = () => {
    //     return isFavorite ? (
    //         <FavoriteIcon fontSize='large' style={{ cursor: 'pointer' }} onClick={handleClick} />
    //     ) : (
    //         <FavoriteBorderIcon fontSize='large' style={{ cursor: 'pointer' }} onClick={handleClick} />
    //     );
    // };

    const handleClick = () => {
        const monsterName = monster.name;
        console.log(monsterName)
        setSearchInput(monsterName);
        navigate('../SearchPage')

    }


    return (
        <>
            <Card sx={{width: 180, height: 180}}>
                <CardContent sx={{padding:'8px'}}>
                    <Grid container sx={{justifyContent:'center'}}>
                        <Grid>
                            <Typography gutterBottom variant="p" component="div" sx={{fontFamily: "Cinzel"}}>
                                {monster.name}
                            </Typography>
                        </Grid>
                        {/*/!*spacer to split the name and the icon*!/*/}
                        {/*<Grid item xs={1}></Grid>*/}

                        {/*<Grid item xs={1}>*/}
                        {/*    /!*{getFavoriteStatus(monster.id) == true ? <img src={weaknessChart} alt='Weakness Chart' width="850px" height="auto" /> : null}*!/*/}
                        {/*    /!*<FavoriteBorderIcon fontSize="large" style={{cursor:"pointer"}} onClick={handleClick}/>*!/*/}
                        {/*    {favoriteIconDecider()}*/}
                        {/*</Grid>*/}
                    </Grid>
                </CardContent>
                <CardMedia
                    component="img"
                    alt={monster.name}
                    sx={{
                        objectFit: 'contain',  // Ensures the entire image is visible without cutting off
                        height: 'auto',
                        maxHeight: 140,  // Optional: Set a max height to control how tall the image can be
                        width: '100%',  // Ensures it takes the full width of the CardMedia container
                        cursor: "pointer"
                    }}
                    image={imageRoute || MonsterHunterEmblem}
                    onClick={handleClick}

                />
            </Card>
        </>
    );
}

export default SmallMonsterCard