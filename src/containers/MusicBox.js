import React, {Component} from 'react';
import MusicSelector from '../components/MusicSelector.js';
import MusicDetail from '../components/MusicDetail.js';


class MusicBox extends Component{

        constructor(props){
            super(props);
            this.state={
                songs:null,
                selectedSong:null
            };
            this.handleSongSelected = this.handleSongSelected.bind(this);
            this.handleSongReset = this.handleSongReset.bind(this);
        }


            componentDidMount(){
                const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';

                fetch(url)
                  .then(res => res.json())
                  .then(songs => this.setState({ songs: songs.feed.entry }))
                  .catch(err => console.error);
              }

              handleSongSelected(id){
                  const song = this.state.songs.find(song => song.id.attributes['im:id'] === id);
                  this.setState({selectedSong:song})
              }
              handleSongReset(){
                  this.setState({selectedSong:null})
              }





    render(){
        if (!this.state.selectedSong) {return (
            <div>
                <MusicSelector songs={this.state.songs} onSongSelected={this.handleSongSelected} />
            </div>
        );} else{
            return(
                <div>
                    <MusicDetail song={this.state.selectedSong} onDeSelect={this.handleSongReset}/>
                </div>
        )}

    }

}

export default MusicBox;
