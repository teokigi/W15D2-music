import React from 'react';


const MusicSelector = (props)=>{
    if (!props.songs) return null;


    const options = props.songs.map(song =>{
        return <option value={song.id.attributes['im:id']} key={song.id.attributes['im:id']}>
                        {song.title.label}
               </option>
    })

    function handleChange(event){
        props.onSongSelected(event.target.value);
    }

    return(
        <div>
            <select onChange={handleChange} defaultValue="default">
                <option disabled value="default">Choose a Top20 UK Hit...</option>
                {options}
            </select>
        </div>
    )
}


export default MusicSelector;
