import React from "react";
import {useRef, useState} from 'react';
import {tracks} from '../../data/tracks'

import Track_data from './track_data'
import Progress_bar from './progress_bar'
import Play_button from './play_button'
import './music_bar.css'

const music_bar = () => {
    const [current_track, set_next_track] = useState(tracks[0]);
    const audioRef = useRef();
    const progressBarRef = useRef();
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);
    
    return (
        <div className="music_bar">
            <div className="inner">
                <Track_data 
                    current_track={current_track} 
                    audioRef={audioRef}
                    setDuration={setDuration}
                    progressBarRef={progressBarRef}
                />
                <Play_button 
                    audioRef={audioRef}
                    progressBarRef={progressBarRef} 
                    duration={duration}
                    setTimeProgress={setTimeProgress}
                />
                <Progress_bar 
                    progressBarRef={progressBarRef} 
                    audioRef={audioRef} 
                    timeProgress={timeProgress}
                    duration={duration}
                />
                
            </div>
        </div>
    )
}

export default music_bar