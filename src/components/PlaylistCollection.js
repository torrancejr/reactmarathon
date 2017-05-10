import React from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component{ //Step 2 Par
  constructor(props){
    super(props);

  }

  render(){
    let handlePlaylistSelect = this.props.handlePlaylistSelect;
    let selectedPlaylistId = this.props.selectedPlaylistId;

    let playlists  = this.props.playlists.map((element)=>{
      let className = null; //Step 8
      let playlistSelectMethod = () => {handlePlaylistSelect(element.id)}
      if(element.id == selectedPlaylistId){ //Step 8
        className = "selected"; //Step 8
      }
      return (
        <Playlist
          key = {element.id} //Step 2
          name = {element.name}
          className = {className}//Step 8
          handlePlaylistSelect = {playlistSelectMethod}
        />
      )
    });
    return(
      // for dave
      <ul> //Step 2
        {playlists}
      </ul>
    );
  }
}

export default PlaylistCollection; //Step 2
