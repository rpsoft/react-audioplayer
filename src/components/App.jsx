import React from 'react';
import Audio from './Audio';
import playlist from '../songs/playlist.json';

const App = () => (
  <Audio
    width={190}
    height={20}
    fullPlayer={false}
    comment={false}
    volumeOrientationDown={true}
    color="#212121"
    autoPlay={true}
    playlist={playlist.playlist}
    style={{
      // boxShadow: '1px 2px 6px rgba(0, 0, 0, 0.2)',
      // width: '800px',
      // height: '400px'
    }}
  />
);

export default App;
