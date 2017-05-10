import React from 'react';
import Playlist from './Playlist';

class PlaylistCollection extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    let selectedPlaylistId = this.props.selectedPlaylistId;
    let playlists  = this.props.playlists.map((element)=>{
      let className = null;
      if(element.id == selectedPlaylistId){
        className = "selected";
      }
      return (
        <Playlist
          key = {element.id}
          name = {element.name}
          className = {className}
        />
      )
    });
    return(
      // for dave
      <ul>
        {playlists}
      </ul>
    );
  }
}

export default PlaylistCollection;
