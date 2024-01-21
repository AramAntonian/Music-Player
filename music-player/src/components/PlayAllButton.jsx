import { useEffect, useState } from 'react'
import StandardButton from './StandardButton'
import play from './icons/play-button.png'
import pause from './icons/pause-button.png'

function PlayAllButton ({setSongs, songs}) {
    const [isPlaying, setIsPlaying] = useState(false)

    //handling playAllButton click
    function handleClick() {
        setIsPlaying(prev => !prev)
        setSongs(prev => {
            for(let el of prev) {
                el.isPlaying = !isPlaying 
            }
            return [...prev]
        })
        console.log('All songs has started')
    }

    //checking if all songs are playing
    useEffect(() => {
        let flag = true
        for(let el of songs){
            if(!el.isPlaying){
                flag = false
            }
        }
        setIsPlaying(flag)
    }, [songs])

  
  
    return (
       <StandardButton
        text={!isPlaying ? 'Play All' : 'Stop All'}
        onClick={handleClick}
        leftIcon={!isPlaying ? play : pause}
        lineBetween = {true}
       />
    )
}
export default PlayAllButton