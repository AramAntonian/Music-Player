import MusicUploadForm from "./components/MusicUploadForm"
import { useEffect, useState } from "react"
import HeaderBar from "./components/HeaderBar"
import SongList from "./components/SongList"
import song from './songs/UntilIFoundYou.mp3'

//Parent page

function HomePage () {
    const [filterValue, setFilterValue] = useState('') // filter value
    const [sortBy, setSortBy] = useState('Track Number') // filter mode
    const [queu, setQueu] = useState([]) // queu of songs

    //custom data
    const [songs, setSongs] = useState([
        {
            songName: 'Until I found you',
            artistName: 'Stephen Sanchez',
            trackNumber: 1,
            file: song,
            isPlaying: false
        },
        {
            songName: 'Until I found you',
            artistName: 'Stephen Sanchez',
            trackNumber: 5,
            file: song,
            isPlaying: false

        }
    ]) 

    //useEffect for turning on next song
    useEffect(() => {
        if(queu.length){
            setSongs(prev => {
                for(let el of prev) {
                    el.isPlaying = el.trackNumber === queu[0].trackNumber
                }
                return [...prev]
            })
            console.log(queu);
        }
    }, [queu])


    //checking if song row machs to filter
    function filterCheck(el) {
        if(!filterValue.length){
            return true
        }
        if( sortBy === 'Track Number' ) {
            return el.trackNumber === +filterValue
        } else if( sortBy === 'Song Name' ){
            return el.songName.includes(filterValue)
        } else{
            return el.artistName.includes(filterValue)
        } 

    }


    //adding all music to queu
    function addMusic (song) {
        setSongs((prev) => {
            prev.push(
            {
                songName: 'unknown',
                artistName: 'unknown',
                trackNumber: Math.round(Math.random() * 100),
                file: song,
                isPlaying: true
            })
            return [...prev]
        })
    }
    
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            padding: '30px'
        }}>
        <HeaderBar
            songs = { songs }
            queu = { queu }
            setSongs = { setSongs }
            setQueu = { setQueu }
            filterValue = { filterValue }
            setFilterValue = { setFilterValue }
            sortBy = { sortBy }
            setSortBy = { setSortBy }
            filterCheck = { filterCheck }
        />
            <SongList 
                filterCheck = { filterCheck }
                setSongs = {setSongs}
                songs={songs}
                queu = {queu}
                setQueu = {setQueu}
            />
            <MusicUploadForm addMusic = { addMusic }/>
        </div>
    )
}

export default HomePage