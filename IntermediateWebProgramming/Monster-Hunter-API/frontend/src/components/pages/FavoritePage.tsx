import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {useEffect, useState} from "react";
import {getAllFavoriteMonsters} from "../monsterService.ts";
import MonsterCard from "../MonsterCard.tsx";
import SmallMonsterCard from "../SmallMonsterCard.tsx";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import MonsterHunterEmblem from "../../assets/Monster-Hunter-Emblem.png";
import {Monster} from "../type.ts";
import axios from "axios";

const DemoPaper = styled(Paper)(({theme}) => ({
    width: 140,
    height: 140,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

export default function FavoritePage({setSearchInput}) {

    const [favoriteMonsters, setFavoriteMonsters] = useState([]);


    const fetchFavoriteMonsters = async () => {
        try {
            const response = await getAllFavoriteMonsters();
            const sortedMonsters = response.sort((a: Monster, b: Monster) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });
            let temp = sortedMonsters.map((singleFavMonster: Monster) => {
                return (
                    <Grid item key={singleFavMonster.id}>
                        <SmallMonsterCard monster={singleFavMonster} setSearchInput={setSearchInput}/>
                    </Grid>
                )
            })
            setFavoriteMonsters(temp)
        } catch (e) {
            console.log("Error fetching favorite monsters in Favorite Page: ", e)
        }
    }

    useEffect(() => {
        fetchFavoriteMonsters();
    }, [favoriteMonsters])

    return (
        <>
            <Grid container spacing={3} sx={{maxWidth: '50vw'}}>
                {favoriteMonsters}
            </Grid>
        </>
    )
}