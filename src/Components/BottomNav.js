import React from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

import FontIcon from 'material-ui/FontIcon';
const tvIcon = <FontIcon className='fa fa-tv' />;
const redditIcon = <FontIcon className='fa fa-reddit' />;
const imdbIcon = <FontIcon className='fa fa-imdb' />;
const routes = ['','#reddit','#imdb'];

class BottomNav extends React.Component {
  state = {selectedIndex: 0};

  navigate(location,index) {
    window.location = location; // Navigate to the new route
    this.setState({selectedIndex: index}) // Keep the buttons correctly lighted up
  }

  render() {
    return (
      <Paper zDepth={1} style={{bottom:0,width: '100%',position:'fixed','zIndex':999}}>
        <BottomNavigation selectedIndex={routes.indexOf(window.location.hash) || 0}>
          <BottomNavigationItem
            label='Find Episode' icon={tvIcon}
            onTouchTap={() => this.navigate('#',0)}
          />
          <BottomNavigationItem
            label='Reddit' icon={redditIcon}
            onTouchTap={() => this.navigate('#reddit',1)}
          />
          <BottomNavigationItem
            label='IMDB' icon={imdbIcon}
            onTouchTap={() => this.navigate('#imdb',2)}
          />
        </BottomNavigation>
      </Paper>
    );
  }
}

export default BottomNav;
