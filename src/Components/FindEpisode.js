import React from 'react';
import { Header, Grid, Input } from 'semantic-ui-react'
import * as imdb from 'imdb-api';
import SeasonDropdown from './SeasonDropdown.js';
import EpisodeTable from './EpisodeTable.js';

class FindEpisode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props._query.show || '',
      season: parseFloat(this.props._query.se)|| 1,
      episode: (this.props._query.ep-1) || 0, // makes index more human-understandable
      seasons: null, episodes: []
    };
    // Query IMDB if necessary
    if (this.props._query.show!==undefined) {
      imdb.get(this.props._query.show)
      .then(media => {
        media.episodes()
        .then(tv => this.setState({
          episodes: tv, seasons: tv[tv.length-1].season
        }))
      });
    }
  }

  handleSearch = (event,search) => {
    imdb.getReq({name: search.value, type: 'series'})
    .catch(err => err) // don't do anything with invalid searches
    .then(media => {
      if (media.type==='series') {
        media.episodes()
        .then(tv => this.setState({
          show: media.title,
          episodes: tv,
          seasons: tv[tv.length-1].season
        }))
      } else {
        this.setState({show: null,seasons: null})
      }
    });
  };

  onSeasonChanged = (event,season) => this.setState({season: season.value})
  onEpisodeChanged = (event,episode) => {
    // Update the route
    window.location = '#?show=' + this.state.show + '&se=' + this.state.season + '&ep=' + (episode+1)
    this.setState({episode})
  }

  render() {
    return (
      <Grid centered container stackable divided='vertically'>
        <br/>
        <Header as='h1'>{this.state.show || 'Search for a TV Show'}</Header>
        <Grid.Row centered columns={2}>
          <Grid.Column>
            <Input fluid focus icon='search' error={this.state.show===null}
              defaultValue={this.props._query.show} onChange={this.handleSearch}
            />
          </Grid.Column>
          <Grid.Column>
            <SeasonDropdown seasons={this.state.seasons}
              value={this.state.season} handleSeason={this.onSeasonChanged}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <EpisodeTable season={this.state.season}
            episodes={this.state.episodes} episode={this.state.episode}
            show={this.state.show} handleEpisode={this.onEpisodeChanged}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

export default FindEpisode;
