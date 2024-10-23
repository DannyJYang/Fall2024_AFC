// import React, {useState} from 'react'
import * as React from 'react';
import {FormEvent, useState} from "react";
import './App.css'
import {Box, Button, styled, TextField} from "@mui/material";
import {brown} from "@mui/material/colors";
import {getMonster} from "./components/monsterService.ts";

function App() {

    const [monsterInput, setMonsterInput] = useState("")
    const [weaponInput, setWeaponInput] = useState("")
    const [monsterInfo, setMonsterInfo] = useState([]);

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(brown[500]),
        // margin: "0px !important",
        // padding: "0px",
        backgroundColor: brown[500],
        '&:hover': {
            backgroundColor:
                brown[300],
        },
    }));
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(getMonster(monsterInput));
        const monsters = await getMonster(monsterInput)
        setMonsterInfo(monsters);

    }


    return (
        <>
            <h1>Monster Killer API</h1>
            <Box
                component="form"
                sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <TextField id="monsterInput" label="Monster Name" variant="filled" value={monsterInput}
                onChange={(e) => setMonsterInput(e.target.value)}/>
                <TextField id="weaponInput" label="Weapon" variant="filled" value={weaponInput}
                onChange={(e) => setWeaponInput(e.target.value)}/>
                {/*<Button variant="contained" color="secondary">Search</Button>*/}
                <ColorButton type='submit' size="small" variant='contained'>Button</ColorButton>
            </Box>
            <div>
                {monsterInfo.length > 0 ? (
                    monsterInfo.map((monster) => (
                        <div key={monster.name}>{monster.name}</div>
                    ))
                ) : (
                    <p>No monster found.</p>
                )}
            </div>
        </>
    )
}

export default App
