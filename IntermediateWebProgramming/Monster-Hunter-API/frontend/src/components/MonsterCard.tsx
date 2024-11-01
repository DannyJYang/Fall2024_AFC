import {Card, CardContent, CardMedia, Typography} from '@mui/material/';
import MonsterHunterEmblem from "../assets/Monster-Hunter-Emblem.png"
import {Monster} from "./type.ts";

// @ts-ignore
const MonsterCard: Monster = ({monster}) => {
    let imageRoute = `../src/assets/icon/${monster.id}_icon.webp`
    console.log(imageRoute)

    return (
        <>
            <Card sx={{maxWidth: 345, height: 550}}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" >
                        {monster.name}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    alt={monster.name}
                    width="auto"
                    height="auto"
                    image={imageRoute ? imageRoute : MonsterHunterEmblem}
                />
                <Typography variant="body2" style={{color: 'text.secondary', minHeight: 80, maxHeight: 130,overflow: "auto"}}>
                    {monster.description}
                </Typography>
            </Card>
        </>
    );
}

export default MonsterCard