import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material/';
import MonsterHunterEmblem from "../assets/Monster-Hunter-Emblem.png"
import {Monster} from "./type.ts";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from "@mui/icons-material/Star";
import Checkbox from '@mui/material/Checkbox';
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

    const handleClick = () => {
        const monsterName = monster.name;
        console.log(monsterName)
        setSearchInput(monsterName);
        navigate('../SearchPage')

    }


    return (
        <>
            <Card sx={{width: 180, height: 200}}>
                <CardContent sx={{padding: '4px 6px'}}> {/*Top/Bot 4px, left/right 6px */}
                    <Grid container sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <Grid xs={9} >
                            <Typography gutterBottom variant="p" component="div" sx={{fontFamily: "Cinzel", marginBottom: 0}}>
                                {monster.name}
                            </Typography>
                        </Grid>

                        <Grid item xs={2} sx={{display: 'flex', alignItems: 'flex-start'}}>
                            <Checkbox sx={{alignSelf: "flex-start"}}/>
                        </Grid>
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