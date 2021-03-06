import React from 'react';
import { Accordion, Button, Icon, Rating } from 'semantic-ui-react'

const EpisodeContent = (episode, show) => {
  // Release date in Unix seconds
  const airDate = Math.floor(episode.released / 1000)
  const oneWeek = airDate + 604800
  // The standard reddit mobile doesn't like cloudsearch, so instead use i.reddit.com
  const redditDomain = window.innerWidth > 700 ? 'www' : 'i'
  return(
    <div>
      <Button color='google plus' href={'https://'+redditDomain+'.reddit.com/search?sort=top&q=(and%20title:%27'+show+'%27%20timestamp:'+airDate+'..'+oneWeek+')&syntax=cloudsearch'} target='_blank'>
        <Icon name='reddit alien' /> Reddit
      </Button>
      <Button color='yellow' href={'http://www.imdb.com/title/' + episode.imdbid} target='_blank'>
        <Icon name='imdb' /> IMDB
      </Button>
      <br/><br/>
      Rating: {episode.rating}/10
      <Rating disabled icon='star' defaultRating={episode.rating} maxRating={10} />
    </div>
)
}

const EpisodeTable = props => {
  if (props.episodes.length===0 || props.show===null) {
    return null // No episode data, don't show descriptions
  }
  // Show only the episodes in the current season
  const filtered = props.episodes.filter(episode => episode.season===props.season)

  // The panels that contain information and links about the episodes
  const panels = filtered.map(row => ({
    title: row.episode + ': ' + row.name,
    content: {content: EpisodeContent(row, props.show)},
    key: row.episode
  }))

  return(
    <Accordion panels={panels} fluid styled
      onTitleClick={props.handleEpisode} activeIndex={props.episode.index}
    />
  )
}

export default EpisodeTable;
