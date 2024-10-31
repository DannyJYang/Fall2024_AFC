import * as React from 'react';
import {FormEvent, useEffect, useState} from "react";
import {Box, Button, styled, TextField} from "@mui/material";
import {brown} from "@mui/material/colors";
import {getMonster} from "../monsterService.ts";
import {Monster} from "../type.ts";
import MonsterCard from "../MonsterCard.tsx";

const ColorButton = styled(Button)(({theme}) => ({
    color: theme.palette.getContrastText(brown[500]),
    // margin: "0px !important",
    // padding: "0px",
    backgroundColor: brown[500],
    '&:hover': {
        backgroundColor:
            brown[300],
    },
}));


export default function SearchPage({searchInput, setSearchInput}) {
    // const [monsterInput, setMonsterInput] = useState("")
    // const [weaponInput, setWeaponInput] = useState("")
    // const [monsterInfo, setMonsterInfo] = useState([]);
    const [monsterCard, setMonsterCard] = useState();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!searchInput) return; //prevents API call if input is empty
        console.log(getMonster(searchInput));
        const monsters = await getMonster(searchInput)
        if (monsters.length > 0) {
            const monsterSingle = monsters[0];
            console.log("Monster Single: ", monsterSingle)
            // @ts-ignore
            console.log(monsterSingle.name)
            console.log(monsterSingle.description)
            setMonsterCard(<MonsterCard monster={monsterSingle}/>);
        } else {
            // @ts-ignore
            setMonsterCard(null); // Reset if no monster found
        }

    }


    useEffect(() => {

    }, [searchInput])

    return (
        <>
            <Box
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField id="monsterInput"
                           label="Monster Name"
                           variant="filled"
                           value={searchInput}
                           onChange={(e) => setSearchInput(e.target.value)}
                />
                {/*<TextField id="weaponInput" label="Weapon" variant="filled" value={weaponInput}*/}
                {/*           onChange={(e) => setWeaponInput(e.target.value)}/>*/}
                {/*<Button variant="contained" color="secondary">Search</Button>*/}
                <ColorButton type='submit' size="small" variant='contained'>Search</ColorButton>
            </Box>
            <div>
                {monsterCard ? monsterCard : <p>No Monster Found</p>}
            </div>
        </>
    )
}