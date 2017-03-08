import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const EpisodeTable = props => {
  // Show only the episodes in the current season
  const filtered = props.episodes.filter(episode => episode.season===props.season)

  return(
    <Table onRowSelection={row => props.handleEpisode(row[0] || 0)}>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn> Episode </TableHeaderColumn>
          <TableHeaderColumn style={{width: '50%'}}> Name </TableHeaderColumn>
          <TableHeaderColumn> Rating </TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody deselectOnClickaway={false}>
        {filtered.map((row, i) => (
              <TableRow selected={i===props.episode} hoverable={true} key={i}>
                <TableRowColumn>{row.episode}</TableRowColumn>
                <TableRowColumn style={{width: '50%'}}>{row.name}</TableRowColumn>
                <TableRowColumn>{row.rating}</TableRowColumn>
              </TableRow>
              ))}
      </TableBody>
    </Table>
  )
}

export default EpisodeTable;
