import SongRow from "./SongRow"

function SongList ({...props}) {


  

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '1px',
                whiteSpace: 'nowrap'
            }}>
                <div style={{
                    width: '4%',
                    height: '40px',
                    background: 'rgb(199, 197, 197)'
                }}></div>
                <div style={{
                    width: '25%',
                    height: '40px',
                    background: 'rgb(199, 197, 197)',
                    boxSizing: 'border-box',
                    padding: '10px 0 0 5px'
                }}>Song Name</div>
                <div style={{
                    width: '25%',
                    height: '40px',
                    background: 'rgb(199, 197, 197)',
                    boxSizing: 'border-box',
                    padding: '10px 0 0 5px'
                }}>Artist Name</div>
                <div style={{
                    width: '10%',
                    height: '40px',
                    background: 'rgb(199, 197, 197)',
                    boxSizing: 'border-box',
                    padding: '10px 0 0 5px'
                }}>Track</div>
                <div style={{
                    width: '10%',
                    height: '40px',
                    background: 'rgb(199, 197, 197)',
                    boxSizing: 'border-box',
                    padding: '10px 0 0 5px'
                }}></div>

            </div>
            {
                props.songs &&
                props.songs.map((el, idx) => (
                    props.filterCheck(el) ? //checing if row much the filter
                    <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                        key = {idx}
                    >
                        <SongRow 
                            setQueu = {props.setQueu}
                            idx = {idx}
                            setSongs={props.setSongs}
                            songs = {props.songs}
                        />
                    </div>
                    : null
                ))
            }
        </div>
    )
}

export default SongList