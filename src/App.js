import React from 'react';
import { Location, Locations, NotFound } from 'react-router-component';
import Material from './MaterialTheme.js';
import BottomNav from './Components/BottomNav.js';
import FindEpisode from './Components/FindEpisode.js';
import './App.css';

class App extends React.Component {
  state = {search: ''};

  // Get searched episode from child prop
  onCallback = search => this.setState({search: search})

  render() {
    return (
      <Material>
        <div style={{padding: '16px', marginBottom: '50px'}}>
          <Locations hash>
            <Location path='/' handler={FindEpisode} callback={this.onCallback} />
            <NotFound handler={FindEpisode} />
          </Locations>
        </div>
        <BottomNav />
      </Material>
    );
  }
}

export default App;
