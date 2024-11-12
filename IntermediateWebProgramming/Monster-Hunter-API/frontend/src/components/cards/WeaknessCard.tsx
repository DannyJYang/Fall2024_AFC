import {Box, Card, CardContent, CardMedia, Typography} from '@mui/material/';
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
        // Fetch and sort data when the monster changes
        const fetchMonsterData = () => {
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
    }, [monster]); // This effect runs when the `monster` prop changes


    // @ts-ignore
    return (
        <>
            <Card sx={{width: 345, height: 550, overflow: 'auto',
                '&::-webkit-scrollbar': {
                    display: 'none', // Hide scrollbar for Webkit browsers
                }}}>
                <CardContent sx={{padding:"8px"}}>
                    <Typography gutterBottom component="div" sx={{fontFamily: "Cinzel", fontSize: "18px"}}>
                        Monster Weaknesses:
                    </Typography>
                    {weakness.length > 0 ? (
                        weakness.map((weaknessItem) => (
                            <Box key={weaknessItem.element}>
                                <Typography variant="body1" sx={{ fontSize: '16px' }}>
                                    - <img
                                    src={`../src/assets/ElementIcon/${weaknessItem.element}.webp`}
                                    style={{width:22, height:22}}
                                />
                                    {weaknessItem.element}: {Array.from({length: weaknessItem.stars}, (_, i) => (
                                    <StarIcon key={i} fontSize="small"/>
                                ))}
                                </Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body2" sx={{fontSize: "16px"}}>No Weaknesses</Typography>
                    )}
                </CardContent>


                <CardContent sx={{padding:"8px"}}>
                    <Typography gutterBottom component="div" sx={{fontFamily: "Cinzel", fontSize: "18px"}}>
                        Monster Resistance:
                    </Typography>
                    {resistance.length > 0 ? (
                        resistance.map((resistanceItem, index) => (
                            <Box>
                                <Typography key={index} variant="p" sx={{fontSize: "16px"}}>
                                    - <img
                                    src={`../src/assets/ElementIcon/${resistanceItem.element}.webp`}
                                    style={{width: 22, height: 22}}
                                />
                                    {resistanceItem.element}
                                </Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography variant="body2" sx={{fontSize: "16px"}}>No Resistances</Typography>
                    )}
                </CardContent>
                <CardContent sx={{padding:"8px"}}>
                    <Typography gutterBottom component="div" sx={{fontFamily: "Cinzel", fontSize: "18px"}}>
                        Monster Ailments:
                    </Typography>
                    {ailment.length > 0 ? (
                        ailment.map((ailmentItem, index) => (
                            <Box>
                                <Typography key={index} variant="p" sx={{fontSize: "16px"}}>
                                    - <img
                                    src={`../src/assets/ElementIcon/${ailmentItem.name}.webp`}
                                    style={{width: 22, height: 22}}
                                />
                                    {ailmentItem.name}
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