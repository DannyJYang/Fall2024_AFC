import {Box, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material/';
import MonsterHunterEmblem from "../../assets/photos/Monster-Hunter-Emblem.png"
import {Monster} from "../type.ts";
import {useEffect, useState} from "react";
import StarIcon from '@mui/icons-material/Star';

// @ts-ignore
const WeaknessCard: Monster = ({monster}) => {

    const [weakness, setWeakness] = useState<any[]>([]);
    const [ailment, setAilment] = useState<any[]>([]);
    const [resistance, setResistance] = useState<any[]>([]);

    useEffect(() => {
        const fetchMonsterData = () => {
            //Resetting the state to blank as there was a glitch with Safi'jiiva having 2 dragon weakness
            //If a user switched to another monster, Safi'Jiiva's dragon 3 weakness would carry over
            setWeakness([])
            setAilment([])
            setResistance([])

            const newWeakness = monster.weaknesses || [];
            const newAilment = monster.ailments || [];
            const newResistance = monster.resistances || [];

            // Sort weakness by stars in descending order
            const sortedWeakness = newWeakness.sort((a, b) => b.stars - a.stars);

            // Update the states with sorted data
            setWeakness(sortedWeakness);
            setAilment(newAilment);
            setResistance(newResistance);
        };
        fetchMonsterData();
    }, [monster]);


    // @ts-ignore
    return (
        <>
            <Card sx={{
                width: 345, height: 550, overflow: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none', // Hide scrollbar for Webkit browsers
                }
            }}>
                <CardContent sx={{padding: "8px"}}>
                    <Typography gutterBottom component="div" sx={{fontFamily: "Cinzel", fontSize: "18px"}}>
                        Monster Weaknesses:
                    </Typography>
                    {weakness.length > 0 ? (
                        weakness.map((weaknessItem) => (
                            <Box key={weaknessItem.element} sx={{display: 'flex'}}>
                                <Grid sx={{alignSelf: 'center', justifySelf:'center', marginRight: '6px'}}>
                                    <img
                                        src={`../src/assets/ElementIcon/${weaknessItem.element}.webp`}
                                        style={{width: 22, height: 22}}
                                        alt={weaknessItem.element}
                                    />
                                </Grid>
                                <Typography variant="body1" sx={{fontSize: '16px', alignSelf:'center'}}>
                                    {weaknessItem.element}:
                                </Typography>
                                <Typography sx={{alignSelf: 'center'}}>
                                    {Array.from({length: weaknessItem.stars}, (_, i) => (
                                        <StarIcon key={i} fontSize="small" sx={{alignItems:'center', marginTop: '5px'}}/>
                                    ))}
                                </Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body2" sx={{fontSize: "16px"}}>No Weaknesses</Typography>
                    )}
                </CardContent>


                <CardContent sx={{padding: "8px"}}>
                    <Typography gutterBottom component="div" sx={{fontFamily: "Cinzel", fontSize: "18px"}}>
                        Monster Resistance:
                    </Typography>
                    {resistance.length > 0 ? (
                        resistance.map((resistanceItem, index) => (
                            <Box>
                                <Grid container>
                                    <img
                                        src={`../src/assets/ElementIcon/${resistanceItem.element}.webp`}
                                        style={{width: 22, height: 22, marginRight: '6px'}}
                                        alt={resistanceItem.element}
                                    />
                                    <Typography key={index} variant="body1" sx={{fontSize: "16px"}}>
                                        {resistanceItem.element}
                                    </Typography>
                                </Grid>
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body2" sx={{fontSize: "16px"}}>No Resistances</Typography>
                    )}
                </CardContent>
                <CardContent sx={{padding: "8px"}}>
                    <Typography gutterBottom component="div" sx={{fontFamily: "Cinzel", fontSize: "18px"}}>
                        Monster Ailments:
                    </Typography>
                    {ailment.length > 0 ? (
                        ailment.map((ailmentItem, index) => (
                            <Box>
                                <Grid container>
                                    <img
                                        src={`../src/assets/ElementIcon/${ailmentItem.name}.webp`}
                                        style={{width: 22, height: 22, marginRight: '6px'}}
                                        alt={ailmentItem.name}
                                    />
                                    <Typography key={index} variant="body1" sx={{fontSize: "16px"}}>
                                        {ailmentItem.name}
                                    </Typography>
                                </Grid>
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body2" sx={{fontSize: "16px"}}>No Ailments</Typography>
                    )}
                </CardContent>

            </Card>
        </>
    );
}

export default WeaknessCard