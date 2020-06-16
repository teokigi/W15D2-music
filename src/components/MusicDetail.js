import React from 'react';


const MusicDetail = (props)=>{
    if (!props.song) return null;

    function clickHandle(){
        props.onDeSelect();
    }
        return(
                <div>
                    <h2>Title: {props.song['im:name'].label}</h2>
                    <ul>
                        <li>Album Art: <img src={props.song['im:image'][0].label} /></li>
                        <li>Artist: <a href={props.song['im:artist'].attributes.href}>{props.song['im:artist'].label}</a></li>
                        <li>Genre: {props.song.category.attributes.label}</li>
                        <li>Album: {props.song['im:collection']['im:name'].label}</li>
                        <li>demo: <audio controls>
                                     <source src={props.song.link[1].attributes.href} type={props.song.link[1].attributes.type} />
                                     unsupported
                                  </audio>
                        </li>
                        <li>Price: {props.song['im:price'].label}</li>
                    </ul>
                    <button onClick={clickHandle}> return</button>
                </div>
            )
    }


export default MusicDetail;
