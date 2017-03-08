import React from 'react';
import { Location, Locations, NotFound } from 'react-router-component';
import FindEpisode from './Components/FindEpisode.js';
import './App.css';

class App extends React.Component {
  state = {
    show: '',
    season: 1, episode: 1
  };

  // Get searched episode from child prop
  onCallback = (show,season,episode,) => this.setState({
    show,
    season, episode
  })

  render() {
    return (
      <div>
        <Locations hash>
          <Location path='/' handler={FindEpisode} show={this.state.show} season={this.state.season} episode={this.state.episode} callback={this.onCallback} />
          <NotFound handler={FindEpisode} show={this.state.show} season={this.state.season} episode={this.state.episode} callback={this.onCallback} />
        </Locations>
      </div>
    );
  }
}

export default App;
