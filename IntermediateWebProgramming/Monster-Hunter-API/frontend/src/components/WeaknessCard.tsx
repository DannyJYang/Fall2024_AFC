import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material/';
import MonsterHunterEmblem from "../assets/Monster-Hunter-Emblem.png"
import {Monster} from "./type.ts";
import {useEffect, useState} from "react";
import StarIcon from '@mui/icons-material/Star';

// @ts-ignore
const WeaknessCard: Monster = ({monster}) => {

    const [weakness, setWeakness] = useState([]);
    const [ailment, setAilment] = useState([]);
    const [resistance, setResistance] = useState([]);

    useEffect(() => {
        const fetchMonsterData = async () => {
            setWeakness(monster.weaknesses || []);
            setAilment(monster.ailments || []);
            setResistance(monster.resistances || []);
        }

        fetchMonsterData()
        console.log(ailment)
    }, [monster]);


    // @ts-ignore
    return (
        <>
            <Card sx={{maxWidth: 345, height: 550}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Cinzel"}}>
                        Monster Weaknesses:
                    </Typography>
                    {weakness.length > 0 ? (
                        weakness.map((weaknessItem, index) => (
                            <Box>
                                <Typography key={index} variant="p" sx={{fontSize: "18px"}}>
                                    - {weaknessItem.element}: {Array.from({ length: weaknessItem.stars }, (_, i) => (
                                    <StarIcon key={i} fontSize="small" />
                                ))}
                                </Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body2" sx={{fontSize: "16px"}}>No Weaknesses</Typography>
                    )}
                </CardContent>


                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Cinzel"}}>
                        Monster Resistance:
                    </Typography>
                    {resistance.length > 0 ? (
                        resistance.map((resistanceItem, index) => (
                            <Box>
                                <Typography key={index} variant="p" sx={{fontSize: "18px"}}>
                                    - {resistanceItem.element}
                                </Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body2" sx={{fontSize: "16px"}}>No Resistances</Typography>
                    )}
                </CardContent>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" sx={{fontFamily: "Cinzel"}}>
                        Monster Ailments:
                    </Typography>
                    {ailment.length > 0 ? (
                        ailment.map((ailmentItem, index) => (
                            <Box>
                                <Typography key={index} variant="p" sx={{fontSize: "18px"}}>
                                    - {ailmentItem.name}
                                </Typography>
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