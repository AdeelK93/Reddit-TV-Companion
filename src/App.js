import React from 'react';
import { Location, Locations, NotFound } from 'react-router-component';
import Material from './MaterialTheme.js';
import BottomNav from './Components/BottomNav.js';
import FindEpisode from './Components/FindEpisode.js';
import Reddit from './Components/Reddit.js';
import IMDB from './Components/IMDB.js';
import './App.css';

class App extends React.Component {
  state = {
    show: '',
    season: 1, episode: 1
  };

  // Get searched episode from child prop
  onCallback = (show,season,episode,released,imdbid) => this.setState({
    show,
    season, episode,
    released, imdbid
  })

  render() {
    return (
      <Material>
        <div style={{padding: '16px', marginBottom: '50px'}}>
          <Locations hash>
            <Location path='/' handler={FindEpisode} show={this.state.show} season={this.state.season} episode={this.state.episode} callback={this.onCallback} />
            <Location path='/reddit' handler={Reddit} show={this.state.show} released={this.state.released} />
            <Location path='/imdb' handler={IMDB} show={this.state.show} imdbid={this.state.imdbid} />
            <NotFound handler={FindEpisode} show={this.state.show} season={this.state.season} episode={this.state.episode} callback={this.onCallback} />
          </Locations>
        </div>
        <BottomNav />
      </Material>
    );
  }
}

export default App;
