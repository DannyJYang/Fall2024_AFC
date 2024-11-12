import {Button, Card, CardContent, Grid, Slider, Box, IconButton, Stack} from "@mui/material";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import backgroundMusic from "../assets/audio/BackgroundMusic.mp3";
import backgroundMusic2 from "../assets/audio/BackGroundMusic2.mp3"
import {
    FastForwardRounded,
    FastRewindRounded,
    PauseRounded,
    PlayArrowRounded,
    VolumeDownRounded,
    VolumeUpRounded
} from "@mui/icons-material";

interface MusicPlayerProps {
    sx?: object; // Accept sx as a prop to apply styles externally
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({sx}) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const musicList = [backgroundMusic, backgroundMusic2]
    const [volume, setVolume] = useState(0.4);
    const [paused, setPaused] = useState(false);
    const [songIndex, setSongIndex] = useState(0)

    const handleVolumeChange = (event: any, newValue: number) => {
        setVolume(newValue / 100);  // Convert slider value to a volume between 0 and 1
    };
    const handleSongEnd = () => {
        setSongIndex((prevIndex) => (prevIndex + 1) % musicList.length);
    }
    const handleMusicIndexChange = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        if (e.currentTarget.getAttribute("aria-label") === "next song") {
            setSongIndex((prevIndex) => (prevIndex + 1) % musicList.length);
        } else if (e.currentTarget.getAttribute("aria-label") === "previous song") {
            setSongIndex((prevIndex) => (prevIndex - 1 + musicList.length) % musicList.length);
        }
    }

    useEffect(() => {
        console.log("Current song index: ", songIndex);  // Log the current song index
    }, [songIndex]);
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;  // Update the volume of the audio element
        }
    }, [volume]);
    useEffect(() => {
        if (audioRef.current) {
            if (paused) {
                audioRef.current.pause();  // Pause the audio when `paused` state is true
            } else {
                audioRef.current.play().catch(error => {
                    console.error('Playback prevented:', error);
                });
            }
        }
    }, [paused]);

    return (
        <>
            <audio ref={audioRef}
                   key={songIndex} //forces React to re-render when the song changes
                   loop={false}
                   autoPlay
                   onEnded={handleSongEnd}>
                <source src={musicList[songIndex]} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>

            {/* Apply sx prop to Box element */}
            <Box sx={sx}>
                <Card sx={{width: "200px", height: "75px", backgroundColor: "#AF8F63"}}>
                    <CardContent sx={{justifyContent: "center", padding: "4px"}}>
                        <Grid container sx={{display: 'flex', justifyContent: 'center'}}>
                            <IconButton aria-label="previous song" onClick={handleMusicIndexChange}>
                                <FastRewindRounded fontSize="medium"/>
                            </IconButton>

                            <IconButton
                                aria-label={paused ? 'play' : 'pause'}
                                onClick={() => setPaused(!paused)}
                            >
                                {paused ? (
                                    <PlayArrowRounded sx={{fontSize: '1.5rem'}}/>
                                ) : (
                                    <PauseRounded sx={{fontSize: '1.5rem'}}/>
                                )}
                            </IconButton>

                            <IconButton aria-label="next song" onClick={handleMusicIndexChange}>
                                <FastForwardRounded fontSize="medium"/>
                            </IconButton>
                        </Grid>

                        <Stack
                            spacing={2}
                            direction="row"
                            sx={(theme) => ({
                                mb: 1,
                                px: 1,
                                '& > svg': {
                                    color: 'rgba(0,0,0,0.4)',
                                    ...theme.applyStyles('dark', {
                                        color: 'rgba(255,255,255,0.4)',
                                    }),
                                },
                            })}
                            alignItems="center"
                        >
                            <VolumeDownRounded/>
                            <Slider
                                aria-label="Volume"
                                value={volume * 100}  // Convert volume to slider range
                                onChange={handleVolumeChange}
                                sx={(t) => ({
                                    color: 'rgba(0,0,0,0.87)',
                                    '& .MuiSlider-track': {
                                        border: 'none',
                                    },
                                    '& .MuiSlider-thumb': {
                                        width: 12,
                                        height: 12,
                                        backgroundColor: '#fff',
                                        '&::before': {
                                            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                                        },
                                        '&:hover, &.Mui-focusVisible, &.Mui-active': {
                                            boxShadow: 'none',
                                        },
                                    },
                                    ...t.applyStyles('dark', {
                                        color: '#fff',
                                    }),
                                })}
                            />
                            <VolumeUpRounded/>
                        </Stack>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default MusicPlayer;
