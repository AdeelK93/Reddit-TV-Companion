import React from 'react';
import { Location, Locations, NotFound } from 'react-router-component';
import FindEpisode from './Components/FindEpisode';
import './App.css';

class App extends React.Component {
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
