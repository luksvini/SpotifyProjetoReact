import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faBackwardStep, faForwardStep, faCirclePause, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import {useRef, useState, useEffect} from "react"
import VolumeControl from './VolumeControl';
import { songsArray } from '../../api/api';


const formatTime = (timeInSeconds) =>{
  const minutes = Math.floor(timeInSeconds / 60).toString().padStart(2, '0')
  const seconds = Math.floor(timeInSeconds - minutes * 60).toString().padStart(2, '0')

  return `${minutes}:${seconds}`
}

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0])
  const seconds = Number(splitArray[1])

  return seconds + minutes * 60
}

const Player = ({duration, randomIdFromArtist, randomId2FromArtist, audio

}) => {

  const audioPlayer = useRef();
  const progressBar = useRef();

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(formatTime(0))
  const [progress, setProgress] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false)
  
  const durationInSeconds = timeInSeconds(duration)
  
  const playPause = () =>{
      isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play()
      setIsPlaying(!isPlaying)
     

     
  }

  const updateBarTime = (event) => {
    if (!audioPlayer.current || !progressBar.current) return;

    const bar = progressBar.current;
    const rect = bar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const barWidth = bar.clientWidth;
    const newTime = (clickX / barWidth) * durationInSeconds;

    audioPlayer.current.currentTime = newTime;
    setProgress((clickX / barWidth) * 100)
  };
  
  const repeatSong = () => {
    setIsRepeat(!isRepeat)
  }

  const handleSongEnd = () =>{

     <Link to ={`/song/${randomIdFromArtist}`} />
  }
  

  useEffect(() => {
    const updateTime = () => {
      const currentTime = audioPlayer.current.currentTime
      setCurrentTime(formatTime(currentTime))
      setProgress((currentTime / durationInSeconds) * 100);

      progressBar.current.style.setProperty(
        "--_progress",
        (currentTime / durationInSeconds) * 100 + "%"
      )

    }

    const audioElement = audioPlayer.current;

    if (audioElement) {
      audioElement.addEventListener("timeupdate", updateTime);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener("timeupdate", updateTime);
      }
    }
  }, [durationInSeconds]);
  


  return (
  <div className="player">
    <div className="player__controllers">
    <Link to={`/song/${randomIdFromArtist}`}>
    <FontAwesomeIcon  className='player__icon '
    icon={faBackwardStep}
    title='Faixa aleatória' />
    </Link>

    <FontAwesomeIcon
    className='player__icon player__icon--play'
    icon={ isPlaying?  faCirclePause :faCirclePlay} 
    title={isPlaying ? "Pausar faixa" : "Iniciar faixa"}
    onClick={() => playPause()}
    />

    <Link to={`/song/${randomId2FromArtist}`}>
    <FontAwesomeIcon  className='player__icon'
    icon={faForwardStep}
    title='Faixa aleatória' />
    </Link>

    <FontAwesomeIcon
      className={`player__icon player__icon--repeat ${isRepeat ? 'active' : ''}`}
     icon={faRepeat}
     onClick={repeatSong}
     title= {isRepeat ? "Não repetir faixa" : "Repetir faixa"}
    />
    </div>
    <div className="player__progress">
        <p>{currentTime}</p>
        
        <div ref={progressBar} className='player__bar' onClick={updateBarTime}  style={{ cursor: "pointer" }} >
            <div ref={progressBar} className="player__bar-progress" style={{ width: `${progress}%` }}></div>

        </div>

        <p>{duration}</p>
        </div>    

        <audio
        ref={audioPlayer}
        src={audio}
        onEnded = {() =>{
          if(isRepeat){
            audioPlayer.current.currentTime = 0;
            audioPlayer.current.play();
          } else{ 
            handleSongEnd()
          }
        }}
        />
        


      <div> 
        <VolumeControl audioPlayer={audioPlayer }/>
      </div>
</div>
  )
}


export default Player;