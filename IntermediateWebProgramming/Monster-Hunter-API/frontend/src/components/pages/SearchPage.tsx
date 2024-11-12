import * as React from 'react';
import {FormEvent, useEffect, useState} from "react";
import {Box, Button, Grid, styled, TextField} from "@mui/material";
import {brown} from "@mui/material/colors";
import {getMonster} from "../monsterService.ts";
import {Monster} from "../type.ts";
import MonsterCard from "../cards/MonsterCard.tsx";
import WeaknessCard from "../cards/WeaknessCard.tsx";


export default function SearchPage({searchInput, setSearchInput}) {

    const [monsterCard, setMonsterCard] = useState();
    const [weaknessCard, setWeaknessCard] = useState();
    const [weaknessChart, setWeaknessChart] = useState();

    useEffect(() => {

        const getSearch = async () => {
            if (!searchInput) return; //prevents API call if input is empty
            const monsters = await getMonster(searchInput)
            if (monsters.length > 0) {
                const monsterSingle = monsters[0];
                console.log("Monster Single: ", monsterSingle)
                // @ts-ignore
                setMonsterCard(<MonsterCard monster={monsterSingle}/>);
                setWeaknessCard(<WeaknessCard monster={monsterSingle}/>);
                setWeaknessChart(`../src/assets/weaknessChart/${monsterSingle.name}.png`);
            } else {
                // @ts-ignore
                setMonsterCard(null); // Reset if no monster found
                setWeaknessCard(null);
            }
        }
        getSearch();
        setSearchInput("")
    }, [searchInput]);


    return (
        <>
            <Box>
                <Grid container spacing={7}>
                    <Grid item>
                        {monsterCard ? monsterCard : <p>No Monster Found</p>}
                    </Grid>

                    <Grid item>
                        {weaknessCard ? weaknessCard : <p>IT HAS NO WEAKNESS? IT'S TOO POWERFUL!</p>}
                    </Grid>

                    <Grid item >
                        {/*<img src="../src/assets/weaknessChart/Rathalos.png" alt="" width="850px" height="auto"/>*/}
                        {weaknessChart ? <img src={weaknessChart} alt='Weakness Chart' width="850px" height="auto" /> : null}

                        {/*<img src={weaknessChart} alt="" width="850px" height="auto"/>*/}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}