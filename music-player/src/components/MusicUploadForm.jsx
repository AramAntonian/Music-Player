import { useRef, useState } from "react"
import '../index.css'

function MusicUploadForm ({ addMusic }) {
    const [openLoading, setOpenLoading] = useState(false)
    const inputRef = useRef(null) 

    function handleFileChoosing (e) {
      const reader = new FileReader()
        reader.onload = (event) => {
          if(event.target){
            addMusic(event.target.result)
          }
          
          }
          reader.readAsDataURL(e.target.files[0])
          setOpenLoading(false)
    }


    return (
        <>
        {
          openLoading ?
        <div style = {{
          width: '100%',
          height: '100%',
          position: 'absolute',
          background: 'black',
          opacity: 0.5,
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 2
        }}
        >
          <div className="loader">
            a
          </div>
        </div>
        :null
        }
        <div 
        style={{
          cursor: 'pointer',
          textDecoration: 'underline',
          width: 'fit-content'
        }}
        onClick = {() => {
          setOpenLoading(true)
          inputRef.current.click()
        }
        }>Upload your music</div>
        <div style = {{
            display: 'none'
        }}>
        <input 
          type = 'file' 
          ref = {inputRef}  
          placeholder = 'hello'
          onChange = {handleFileChoosing}
          accept = '.mp3,.wav'
        />
        </div>
        </>
    )
}

export default MusicUploadForm