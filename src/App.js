import React from 'react';
import { Location, Locations, NotFound } from 'react-router-component';
import FindEpisode from './Components/FindEpisode.js';
import './App.css';

class App extends React.Component {
  state = {show: '', season: 1, episode: 1};

  // Get searched episode from child prop
  onCallback = (show,season,episode) => this.setState({
    show, season, episode
  })

  render() {
    return (
      <Locations hash>
        <Location path='/' handler={FindEpisode} />
        <NotFound handler={FindEpisode} />
      </Locations>
    );
  }
}

export default App;
