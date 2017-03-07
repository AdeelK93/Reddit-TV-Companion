import React from 'react';
import Material from './MaterialTheme.js';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';

const tvIcon = <FontIcon className='fa fa-tv' />;
const redditIcon = <FontIcon className='fa fa-reddit' />;
const imdbIcon = <FontIcon className='fa fa-imdb' />;

class BottomNav extends React.Component {
  state = {selectedIndex: 0};

  select = index => this.setState({selectedIndex: index});

  render() {
    return (
      <Material>
        <div style={{padding: '16px', marginBottom: '50px'}}>
          aaa
        </div>

        <Paper zDepth={1} style={{bottom:0,width: '100%',position:'fixed','zIndex':999}}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label='Find Episode' icon={tvIcon}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label='Reddit' icon={redditIcon}
              onTouchTap={() => this.select(1)}
            />
            <BottomNavigationItem
              label='IMDB' icon={imdbIcon}
              onTouchTap={() => this.select(2)}
            />
          </BottomNavigation>
        </Paper>
      </Material>
    );
  }
}

export default BottomNav
