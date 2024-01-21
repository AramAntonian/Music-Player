import { useState } from "react";
import StandardButton from "./StandardButton";
import plus from './icons/plus.png'

function AddAllButton ({handleAddAll, queu, queuChange}) {
    const [isOpen, setIsOpen] = useState(false)

    //opening queu list
    function handleDropDown (foo) {
        if(queu.length){
            setIsOpen(prev => !prev)
            foo(prev => !prev)
        }
    }


    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
        <StandardButton 
            text = { 'Add All' }
            leftIcon = { plus }
            onClick={ handleAddAll }
            handleDropDown = { handleDropDown }
        />
        {
        //queu
            isOpen ?
            <div style = {{
                position: 'absolute',
                top: '28px',
                width: 'calc(100% - 2px)',
                background: 'white',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
                border: '1px solid gray',
                borderTop :'0'
            }}>
                {
                    queu.length?
                    queu.map((el, idx) => (
                        <div key = {idx}
                            style={{
                                borderTop: '1px solid gray',
                                padding: '3px',
                                cursor: 'pointer'
                            }}
                            onClick={ () => { queuChange(el.trackNumber) } }
                        >
                            { el.songName }
                        </div>
                    )):
                    null
                    
                }
            </div>
            : null
        }
        </div>
    )
}

export default AddAllButton