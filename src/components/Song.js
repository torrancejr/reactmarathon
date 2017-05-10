import React from 'react';

const Song = (props) => {
  return (
    <li className={props.className}>
      {props.name} - {props.artist}
    </li>
  )

}

export default Song;
