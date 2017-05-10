import React from 'react';
import Song from './Song';

class SongCollection extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let selectedSongId = this.props.selectedSongId;
    let songs  = this.props.songs.map((element)=>{
      // body
      let className = null;
      if(element.id == selectedSongId){
        className = "selected";
      }
      return (
        <Song
          key = {element.id}
          name = {element.name}
          artist = {element.artist}
          className = {className}
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
