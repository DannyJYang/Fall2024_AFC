import * as React from 'react';
import {Grid, Stack} from "@mui/material";
import {useEffect, useState} from "react";

export default function LandingPage() {

    const countDownDate = new Date("Feb 27, 2025 20:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })


    useEffect(() => {
        const countDownTimer = () => {
            const now = new Date().getTime();
            const t = countDownDate - now;

            const days = Math.floor(t / (1000 * 60 * 60 * 24));
            const hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((t % (1000 * 60)) / 1000);

            setTimeLeft({days, hours, minutes, seconds})

            if (t <= 0) { //if countdown reaches zero, clear the interval
                clearInterval(interval)
            }
        }
        const interval = setInterval(countDownTimer, 1000);

        return () => clearInterval(interval)

    }, [countDownDate])


    return (

        <>
            <h1>Welcome to Monster Killer</h1>

            <p>This is a monster hunter database project that I created to kill large monsters quickly.</p>
            <p>I wanted to know what certain large monsters are weak to element and ailment wise, what sort of elements
                or ailments</p>
            <p>monsters do to hunters, and what parts are breakable/severable. </p>

            <Grid>
                <h2>Monster Hunter Wilds (Feb 27, 2025)</h2>
            </Grid>
            <Grid>
                <h3>{timeLeft.days} days : {timeLeft.hours} hours : {timeLeft.minutes} minutes
                    : {timeLeft.seconds} seconds</h3>
            </Grid>
            <div className='video-container'>
                <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/GCVThKH4Xkk?si=cq07WyTn4hKLYBoe"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
            </div>


            <h3>Limitations</h3>
            <p>Currently limited to only large monsters in Monster hunter World</p>

            <h3>API that I am using</h3>
            <p>Currently utilizing MH: World DB (https://contrib.mhw-db.com/)</p>

            <h3>Potential Future Updates</h3>
            <p>Will have to make my own database and assets for MH World: Iceborne, MH Rise and MH Wilds</p>

            <h2>Things to do</h2>
            <p><s>Change font to a custom font</s></p>
            <p><s>Implement favorites function</s></p>
            <p><s>Move background music audio slider to somewhere better</s></p>
            <p><s>Monster Hunter menu sound effect when mouse hovers or clicks something</s></p>
            <p>Custom mouse cursor?</p>
            <p><s>Maybe use monster hunter world theme as another background music</s></p>
            <p>Click monster icon in search and it plays monster roar sound</p>
            <p>Use markdown file for the landing page</p>
            <Stack direction='row'>
                <Stack direction='column'>
                    <h1>Outcome</h1>
                    <h1>Risk</h1>
                    <h1>Metric</h1>
                    <h1>Output</h1>
                </Stack>
            </Stack>
        </>
    )
}