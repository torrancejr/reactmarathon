import React from 'react';
import Song from './Song';

class SongCollection extends React.Component{
  constructor(props){
    super(props);
  }


  render(){
    let handleSongSelect = this.props.handleSongSelect;
    let selectedSongId = this.props.selectedSongId;
    let songs  = this.props.songs.map((element)=>{
      // body
      let className = null;
      let songSelectMethod = () => {handleSongSelect(element.id)}
      if(element.id == selectedSongId){
        className = "selected";
      }
      return (
        <Song
          key = {element.id}
          name = {element.name}
          artist = {element.artist}
          className = {className}
          handleSongSelect = {songSelectMethod}
        />
      )
    });
    return(
      // for dave
      <ul>
        {songs}
      </ul>
    );
  }
}

export default SongCollection;
