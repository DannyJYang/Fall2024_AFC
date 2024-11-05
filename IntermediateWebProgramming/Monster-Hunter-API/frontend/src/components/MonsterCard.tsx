import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material/';
import MonsterHunterEmblem from "../assets/Monster-Hunter-Emblem.png"
import {Monster} from "./type.ts";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from "@mui/icons-material/Star";
import {Grid} from "@mui/material";
import {updateFavoriteStatus, getFavoriteStatus} from "./monsterService.ts";
import {useEffect} from "react";


// @ts-ignore
const MonsterCard: Monster = ({monster}) => {
    let imageRoute = `../src/assets/icon/${monster.id}_icon.webp`
    console.log(imageRoute)

    const handleClick = async () => {
        const monsterId = monster.id;
        const updatedMonster = await updateFavoriteStatus(monsterId);
        console.log(updatedMonster);
    }


    return (
        <>
            <Card sx={{maxWidth: 345, height: 550}}>

                <CardContent>
                    <Grid container>
                        <Grid item xs={10}>
                            <Typography gutterBottom variant="h5" component="div">
                                {monster.name}
                            </Typography>
                        </Grid>

                        {/*spacer to split the name and the icon*/}
                        <Grid item xs={1}></Grid>

                        <Grid item xs={1}>
                            <FavoriteBorderIcon fontSize="large" style={{cursor:"pointer"}} onClick={handleClick}/>
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
                <Typography variant="body2"
                            style={{color: 'text.secondary', minHeight: 80, maxHeight: 130, overflow: "auto"}}>
                    {monster.description}
                </Typography>
            </Card>
        </>
    );
}

export default MonsterCard