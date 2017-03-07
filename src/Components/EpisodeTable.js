import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const EpisodeTable = props => {
  // Show only the episodes in the current season
  const filtered = props.episodes.filter(episode => episode.season===props.season)

  return(
    <Table onRowSelection={props.handleEpisode}>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          {['Episode #','Name','Rating'].map(column => <TableHeaderColumn key={column}> {column} </TableHeaderColumn>)}
        </TableRow>
      </TableHeader>
      <TableBody deselectOnClickaway={false}>
        {filtered.map((row, i) => (
              <TableRow key={i} selected={i===props.episode}>
                <TableRowColumn>{row.episode}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.rating}</TableRowColumn>
              </TableRow>
              ))}
      </TableBody>
    </Table>
  )
}

export default EpisodeTable;
