import { useState } from 'react'
import down from './icons/down.png'

//component for buttons with dropDown
function StandardButton ({text, leftIcon, onClick, ...props}) {
    const [dropDownOpen, setDropDownOpen] = useState(false)

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1px',
        }}>
        <div style={{
            width: '80px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            whiteSpace: 'nowrap',
            background: 'white',
            borderRadius: '5px',
            borderTopRightRadius: '0px',
            borderBottomRightRadius: '0px',
            borderBottomLeftRadius: dropDownOpen ? '0px' : '5px',
            padding: '5px 0px 3px 8px',
            border: '1px solid gray',
            cursor: 'pointer'
        }}
            onClick={onClick}
        >
            <img src = {leftIcon} alt = 'play' width={12}/>
            <button style={{
            background: 'white',
            outline: 'none',
            border: 'none',
            cursor: 'pointer',

            }}
            >
                {text}
            </button>
        
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background :'white',
            border: '1px solid gray',
            height: '26px',
            borderTopRightRadius: '5px',
            borderBottomRightRadius: dropDownOpen ? '0px' : '5px',
            cursor: 'pointer'
        }}
            onClick = {props.handleDropDown ? (() => {
                props.handleDropDown(setDropDownOpen)
            }): null}
        >

                <img src = {down} alt = 'down' width = {11} />
        </div>
        </div>
    )
}

export default StandardButton