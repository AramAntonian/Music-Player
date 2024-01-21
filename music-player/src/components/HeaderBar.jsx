import AddAllButton from "./AddAllButton"
import FilterButton from "./FilterButton"
import FilterInput from "./FilterInput"
import PlayAllButton from "./PlayAllButton"

function HeaderBar ({setSongs, songs, setQueu, queu, setFilterValue, filterValue, sortBy, setSortBy, filterCheck}) {

    //adding song to queu if they mach to filter
    function handleAddAll () {
        setQueu(songs.map(el => (
            filterCheck(el) ?
            {
                trackNumber: el.trackNumber,
                songName: el.songName
            }
            :
            false
        )).filter(el => el))
        console.log('All musics has added to queu')
    }


    //function if other music is selected
    function queuChange (trackNumber) {
        let changeArr = []

        for(let el of queu) {
            if(el.trackNumber === trackNumber){
                changeArr.shift(el)
            }
            else{
                changeArr.push(el)
            }
        }
        setQueu(changeArr)
    }

    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px',
            background: '#D9D9D9',
            border: '1px solid gray',
            width: '73%',
            borderRadius: '5px',
            flexWrap: 'wrap',
            gap: '5px',

        }}
        >
            <div style = {{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '5px'
            }}>
                <PlayAllButton setSongs = { setSongs } songs = { songs }/>
                <AddAllButton handleAddAll = { handleAddAll } queu = { queu } queuChange = { queuChange }/>
            </div>
            <div style = {{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '5px'
            }}>
                <FilterButton sortBy = { sortBy } setSortBy = { setSortBy }/>
                <FilterInput  setFilterValue = { setFilterValue } filterValue = { filterValue }/>
            </div>
        </div>
    )
}

export default HeaderBar