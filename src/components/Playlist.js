import React from 'react';

const Playlist = (props) => {
  return (
    <li className={props.className} onClick={props.handlePlaylistSelect}>
      {props.name}
    </li>
  )

}
//Josh Wrote ALL OF THIS!!!
export default Playlist;
