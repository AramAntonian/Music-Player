import { useRef } from "react"

function MusicUploadForm ({ addMusic }) {
    const inputRef = useRef(null)

    function onClick (e) {
      const reader = new FileReader()
        reader.onload = (event) => {
          if(event.target){
            addMusic(event.target.result)
          }
          
          }
          reader.readAsDataURL(e.target.files[0])
    }
    
    return (
        <>
        <div 
        style={{
          cursor: 'pointer',
          textDecoration: 'underline',
          width: 'fit-content'
        }}
        onClick = {() => 
            inputRef.current.click()
        }>Upload your music</div>
        <div style = {{
            display: 'none'
        }}>
        <input 
          type = 'file' 
          ref = {inputRef}  
          placeholder = 'hello' 
          onChange = {onClick}
          accept = '.mp3,.wav'
        />
        </div>
        </>
    )
}

export default MusicUploadForm