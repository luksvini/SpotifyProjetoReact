import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeLow, faVolumeXmark } from "@fortawesome/free-solid-svg-icons";

const VolumeControl = ({audioPlayer}) => {
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false)


  useEffect(() =>{
    if (audioPlayer.current) {
        audioPlayer.current.volume = isMuted ? 0 : volume / 100;
      }
    }, [volume, isMuted, audioPlayer]);

    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    return (
        <div className='volume-control'>
            <button onClick={toggleMute} className='volume-control__icon'>
                <FontAwesomeIcon
                icon={isMuted? faVolumeXmark : volume > 50 ? faVolumeHigh : faVolumeLow}
                />
            </button>

            <input
            type='range'
            min="0"
            max="100"
            value={isMuted ? 0 : volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className='volume-control__slider'
            />
    </div>
  )
}

export default VolumeControl