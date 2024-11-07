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


// @ts-ignore
const MonsterCard: Monster = ({monster}) => {
    let imageRoute = `../src/assets/icon/${monster.id}_icon.webp`
    console.log(imageRoute)
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    const handleClick = async () => {
        const updatedMonsterFavoriteStatus = await updateFavoriteStatus(monster.id);
        setIsFavorite(updatedMonsterFavoriteStatus);  // Update state based on the new favorite status
        console.log(updatedMonsterFavoriteStatus);
    }


    useEffect(() => {
        const fetchFavoriteStatus = async () => {
            const status: any = await getFavoriteStatus(monster.id);
            console.log(status)
            setIsFavorite(status);
        }
        fetchFavoriteStatus();
    }, [monster.id, isFavorite])

    const favoriteIconDecider = () => {
        return isFavorite ? (
            <FavoriteIcon fontSize='large' style={{ cursor: 'pointer' }} onClick={handleClick} />
        ) : (
            <FavoriteBorderIcon fontSize='large' style={{ cursor: 'pointer' }} onClick={handleClick} />
        );
    };


    return (
        <>
            <Card sx={{maxWidth: 345, height: 550}}>

                <CardContent>
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Cinzel"}}>
                                {monster.name}
                            </Typography>
                        </Grid>

                        {/*spacer to split the name and the icon*/}
                        <Grid item xs={1}></Grid>

                        <Grid item xs={1}>
                            {/*{getFavoriteStatus(monster.id) == true ? <img src={weaknessChart} alt='Weakness Chart' width="850px" height="auto" /> : null}*/}
                            {/*<FavoriteBorderIcon fontSize="large" style={{cursor:"pointer"}} onClick={handleClick}/>*/}
                            {favoriteIconDecider()}
                        </Grid>
                    </Grid>
                </CardContent>

                <CardMedia
                    component="img"
                    alt={monster.name}
                    width="auto"
                    height="auto"
                    image={imageRoute || MonsterHunterEmblem}
                />
                <Typography variant="body3"
                            style={{color: 'text.secondary', minHeight: 80, maxHeight: 130, overflow: "auto"}}>
                    {monster.description}
                </Typography>
            </Card>
        </>
    );
}

export default MonsterCard