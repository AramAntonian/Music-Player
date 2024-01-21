import play_button from './icons/play-button.png'
import dots from './icons/dots.png'
import heart from './icons/heart.png'
import done from './icons/done.png'
import share from './icons/share.png'
import pause_button from  './icons/pause-button.png'
import down from './icons/down.png'
import { useEffect, useRef, useState } from 'react'

function SongRow ({songs, idx, setSongs, setQueu}) {
    const audioRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(songs[idx].isPlaying)

    //useEffect for turning of music when its ended and removing it from queu
    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
          const handleAudioEnd = () => {
            setIsPlaying(false)
            setQueu(prev =>{
                prev.shift()
                return [...prev]
            })
            songs[idx].isPlaying = false
            console.log('Audio has finished playing')
          };
    
          audio.addEventListener('ended', handleAudioEnd);
    
         
          return () => {
            audio.removeEventListener('ended', handleAudioEnd);
          };
        }
       
      }, []);

      //checking if music is playing
      useEffect(() => {
        setIsPlaying(songs[idx].isPlaying)
        if(songs[idx].isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
      }, [idx, songs])

      //function for starting music
    const play = () => {
        audioRef.current.play()
        setIsPlaying(true)
        setSongs(prev => {
            prev[idx].isPlaying = true
            return [...prev]
        })
       
    }

    //function for stoping music

    const stop = () => {
        audioRef.current.pause()
        setIsPlaying(false)
        setSongs(prev => {
            prev[idx].isPlaying = false
            return [...prev]
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '4%',
            padding: '5px 5px 5px 0',
            borderBottom: '1px solid #D9D9D9',
            alignItems: 'center'


        }}>
            <img src={dots} alt="dots" width={12} heigth = {12}/>
            {
                !isPlaying ?
                <img src={play_button} alt="playButton" width={12} onClick = {play}/>
                :<img src={pause_button} alt="pouseButton" width={12} onClick = {stop}/>
            }
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '25%',
            borderBottom: '1px solid #D9D9D9',
            paddingLeft: '3px'

        }}>
            {songs[idx].songName}
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '25%',
            borderBottom: '1px solid #D9D9D9',

        }}>
            {songs[idx].artistName}
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '10%',
            borderBottom: '1px solid #D9D9D9',
            paddingLeft: '3px'

        }}>
            {songs[idx].trackNumber}
        </div>
            <div style = {{
            borderBottom: '1px solid #D9D9D9',
            width: 'calc(9% - 7px)',
            flexWrap: 'wrap',
            paddingLeft: '5px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'

            }}>
                <img src = {heart} alt = 'heart' width = {12}/>
                <img src = {done} alt = 'done' width = {12}/>
                <img src = {share} alt = 'share' width = {12}/>
                <img src = {down} alt = 'down' width = {12}/>
            </div>
            <audio src = {songs[idx].file} ref = {audioRef} />
        </div>

    )
}

export default SongRow