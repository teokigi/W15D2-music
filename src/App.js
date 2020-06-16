import React from 'react';
import './App.css';
import MusicBox from './containers/MusicBox.js';

function App() {
  return (
      <div className="appBody">
      <h1> UK's top 20 songs</h1>
      
        <MusicBox />
      </div>
  );
}

export default App;
