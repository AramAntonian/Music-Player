import { useEffect, useState } from 'react'
import down from './icons/down.png'
import sort from './icons/sort.png'


function FilterButton ({sortBy, setSortBy}) {
    const [isOpen, setIsOpen] = useState(false)


    //useEffect for close drop down by clicking other side of window
    useEffect(() => {
        window.addEventListener('click', (event) => {
          const target = event.target
          console.log(target.id);
          if (target.id !== 'drop-down') {
            setIsOpen(false)
          }
        })
        return () =>{
            window.removeEventListener('click', (event) => {
                const target = event.target
                if (target.id !== 'drop-down') {
                  setIsOpen(false)
                }
              })  
        }
      }, [])

      //handling open and close drop down
    const handleopen = () =>{
        setIsOpen(prev => !prev)
    }

    //changing sorting type
    const sortByChange = (text) => {
        setSortBy(text)
    } 

    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}
            id = { 'drop-down' }
        >
        <div 
        style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            background: 'white',
            borderRadius: '5px',
            width: '110px',
            padding: '5px 0px 3px 8px',
            border: '1px solid gray',
            cursor: 'pointer',
            borderBottomRightRadius: isOpen ? '0px' : '5px',
            borderBottomLeftRadius: isOpen ? '0px' : '5px'
        }}
            id = { 'drop-down' }
            onClick={ handleopen }
        >
            <img src = {sort} alt = 'play' width={12}
            id = { 'drop-down' }
            
            />
            <button 
            style={{
                background: 'white',
                outline: 'none',
                border: 'none',
                cursor: 'pointer',
            }}
            id = { 'drop-down' }
            >
                {sortBy.slice(0, 8) + '...'}
            </button>
        <img src = { down }  alt = 'down' width = {12} style={{
            position: 'absolute',
            right: '3px',
            marginRight: '5px',
            transform: isOpen ? 'rotate(0deg)' : 'rotate(180deg)',
            transitionDuration: '0.3s'
        }}
        id = {'drop-down'}
        />
        </div>
        {
            isOpen ?
            <div
            style={{
                position: 'absolute',
                top: '28px',
                width: 'calc(100% - 2px)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid gray',
                cursor: 'pointer',
                borderTop: '0px',
                borderBottomRightRadius: '5px',
                borderBottomLeftRadius: '5px'
            }}
             >
                <div style = {{
                    background: 'white',
                    padding: '3px'
                }}
                onClick={() => sortByChange('Track Number')}
                >Track Number</div>
                <div style = {{
                    background: 'white',
                    borderTop: '1px solid gray',
                    padding: '3px'
                }}
                onClick={() => sortByChange('Artist Name')}
                >Artist Name</div>
                <div style = {{
                    background: 'white',
                    borderTop: '1px solid gray',
                    padding: '3px',
                    borderBottomRightRadius: '5px',
                    borderBottomLeftRadius: '5px'
                }}
                onClick={() => sortByChange('Song Name')}
                >Song Name</div>
        </div>
        :
        null
        }
        </div>
    )
}

export default FilterButton