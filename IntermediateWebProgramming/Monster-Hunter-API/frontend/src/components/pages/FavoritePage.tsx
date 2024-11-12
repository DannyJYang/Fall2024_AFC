import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {useEffect, useState} from "react";
import {getAllFavoriteMonsters} from "../monsterService.ts";
import MonsterCard from "../cards/MonsterCard.tsx";
import SmallMonsterCard from "../cards/SmallMonsterCard.tsx";
import {Button, Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import MonsterHunterEmblem from "../../assets/photos/Monster-Hunter-Emblem.png";
import {Monster} from "../type.ts";
import axios from "axios";
import {updateFavoriteStatus} from "../monsterService.ts";
import {playClick, playConFirm} from "../../helper.ts";

const DemoPaper = styled(Paper)(({theme}) => ({
    width: 140,
    height: 140,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

export default function FavoritePage({setSearchInput}) {

    const [favoriteMonsters, setFavoriteMonsters] = useState([]);
    const [selectedMonsters, setSelectedMonsters] = useState([]);

    const handleChangeFavoriteStatus = async () => {
        if(selectedMonsters.length == 0) {
            console.log("Selected monster array is empty!")
            return;
        }
        try {
            console.log("Removing selected monsters: ", selectedMonsters)
            const responses = await Promise.all(
                selectedMonsters.map(async (singleMonsterId) => {
                    console.log("Removing single monster: ", singleMonsterId)
                    await updateFavoriteStatus(singleMonsterId)
                })
            )
            setSelectedMonsters([]);
            playConFirm();
            await fetchFavoriteMonsters(); //refreshing favorite page
        } catch (e) {
            console.error("Error mass updating favorite status: ", e)
        }
    }

    const handleClear = () => {
        if(selectedMonsters.length > 0) {
            playClick();
            setSelectedMonsters([]);
        }
        else {
            console.log("Nothing to clear here, Boss!")
            return;
        }
    }

    const fetchFavoriteMonsters = async () => {
        try {
            const response = await getAllFavoriteMonsters();
            const sortedMonsters = response.sort((a: Monster, b: Monster) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            });
            let temp = sortedMonsters.map((singleFavMonster: Monster) => {
                return (
                    <Grid item key={singleFavMonster.id}>
                        <SmallMonsterCard monster={singleFavMonster} setSearchInput={setSearchInput}
                                          setSelectedMonsters={setSelectedMonsters} selectedMonsters={selectedMonsters}/>
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
            <Stack direction="row">
                <Grid container spacing={3} sx={{maxWidth: '50vw'}}>
                    {favoriteMonsters}
                </Grid>
                <Grid container>
                    <Grid>
                        <Button variant="contained" onClick={handleChangeFavoriteStatus}
                                sx={{marginRight: "15px"}}>Remove</Button>
                        <Button variant="contained" onClick={handleClear}>Clear</Button>
                    </Grid>
                </Grid>

            </Stack>

        </>
    )
}