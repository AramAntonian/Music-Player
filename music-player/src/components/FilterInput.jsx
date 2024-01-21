import search from './icons/search.png'

function FilterInput ({filterValue, setFilterValue}) {

    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'row',
            position: 'relative'
        }}>
            <img src = {search} alt = {'search'} style={{
                position: 'absolute',
                left: '8px',
                top: '5px'
            }}/>
            <input 
            style={{
                background: 'white',
                padding: '5px 5px 2px 30px',
                width: '60%',
                outline: 'none',
                border: '1px solid gray',
                borderRadius: '10px'
            }}
                placeholder="Filter"
                value={filterValue}
                onChange = { (event) => { setFilterValue(event.target.value) } }
            />
        </div>
    )
}

export default FilterInput