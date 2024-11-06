import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {useEffect, useState} from "react";
import {getAllFavoriteMonsters} from "../monsterService.ts";

const DemoPaper = styled(Paper)(({theme}) => ({
    width: 120,
    height: 120,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
}));

export default function FavoritePage() {

    const [favoriteMonsters, setFavoriteMonsters] = useState([]);

    const fetchFavoriteMonsters = async () => {
        const temp = await getAllFavoriteMonsters();
        console.log(temp);
        setFavoriteMonsters(temp);
    }

    useEffect(() => {
        fetchFavoriteMonsters();
    }, [favoriteMonsters])




    return (
        <>
            <Stack direction="column" spacing={'3vh'} marginTop={'3vh'}>
                <Stack direction="row" spacing={3}>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                </Stack>
                <Stack direction="row" spacing={3}>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                </Stack>
                <Stack direction="row" spacing={3} >
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                </Stack>
                <Stack direction="row" spacing={3} >
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                    <DemoPaper variant="outlined">outlined variant</DemoPaper>
                </Stack>
            </Stack>

        </>
    )
}