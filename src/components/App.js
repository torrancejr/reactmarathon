import React from 'react';
import PlaylistCollection from './PlayListCollection';
import SongCollection from "./SongCollection";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="large-6 columns">
          <h1> Maaay Playlist </h1>
          <PlaylistCollection playlists={data.playlists} selectedPlaylistId={data.selectedPlaylistId}/>
        </div>
        <div className="large-6 columns">
          <h1> Song Section </h1>
          <SongCollection songs={selectedPlaylistSongs} selectedSongId={data.selectedSongId}/>
        </div>
      </div>
    );
  }
}

export default App;
