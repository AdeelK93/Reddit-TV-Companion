import React from 'react';
import { Header, Grid, Input } from 'semantic-ui-react'
import imdb from 'imdb-api';
import SeasonDropdown from './SeasonDropdown.js';
import EpisodeTable from './EpisodeTable.js';

class FindEpisode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.show,
      season: this.props.season, seasons: null,
      episode: this.props.episode, episodes: []
    };
    // Query IMDB if necessary
    if (this.props.show!=='') {
      imdb.get(this.props.show)
      .then(media => {
        media.episodes()
        .then(tv => this.setState({
          episodes: tv, seasons: tv[tv.length-1].season
        }))
      });
    }
  }

  handleSearch = (event,search) => {
    imdb.get(search.value)
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
    this.props.callback(
      this.state.show,
      this.state.season, episode
    )
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
              defaultValue={this.props.show} onChange={this.handleSearch}
            />
          </Grid.Column>
          <Grid.Column>
            <SeasonDropdown seasons={this.state.seasons}
              value={this.state.season} handleSeason={this.onSeasonChanged}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
          <EpisodeTable season={this.state.season} episodes={this.state.episodes}
            show={this.state.show} handleEpisode={this.onEpisodeChanged}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

export default FindEpisode;
