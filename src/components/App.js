import React from 'react';
import PlaylistCollection from './PlayListCollection';
import SongCollection from "./SongCollection";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId

    }

    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this)
  }


  handleSongSelect(id){ //Step 9
    this.setState({selectedSongId:id})
  }

  handlePlaylistSelect(id){ //Step 9
    let songs = this.props.data.playlists[id-1].songs;
    let randomSong = songs[Math.floor(Math.random() * songs.length)];
    this.setState({selectedPlaylistId:id,selectedSongId:randomSong})
  }



  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="large-6 columns">
          <h1> Maaay Playlist </h1>
          <PlaylistCollection playlists={data.playlists} selectedPlaylistId={this.state.selectedPlaylistId} handlePlaylistSelect = {this.handlePlaylistSelect}/>
        </div>
        <div className="large-6 columns">
          <h1> Song Section </h1>
          <SongCollection songs={selectedPlaylistSongs} selectedSongId={this.state.selectedSongId} handleSongSelect={this.handleSongSelect}/>
        </div>
      </div>
    );
  }
}

export default App;
