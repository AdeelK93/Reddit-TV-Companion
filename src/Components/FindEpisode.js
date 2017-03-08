import React from 'react';
import TextField from 'material-ui/TextField';
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
    imdb.get(search)
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

  onSeasonChanged = (event,i,season) => this.setState({season})
  onEpisodeChanged = episode => {
    // Show only the episodes in the current season
    const filtered = this.state.episodes.filter(episode => episode.season===this.state.season)
    this.props.callback(
      this.state.show,
      this.state.season, episode,
      filtered[episode].released, filtered[episode].imdbid
    )
    this.setState({episode})
  }

  render() {
    return (
      <div>
        <div className='center'>
          <TextField floatingLabelText={this.state.show || 'TV Show Name'}
            errorText={this.state.show===null ? 'Need a valid show name' : null}
            defaultValue={this.props.show} onChange={this.handleSearch}
          />
          <SeasonDropdown seasons={this.state.seasons}
            value={this.state.season} handleSeason={this.onSeasonChanged}
          />
        </div>
        <EpisodeTable season={this.state.season} episodes={this.state.episodes}
          episode={this.state.episode} handleEpisode={this.onEpisodeChanged}
        />
      </div>
    );
  }
}

export default FindEpisode;
