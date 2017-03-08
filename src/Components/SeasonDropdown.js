import React from 'react';
import { Dropdown } from 'semantic-ui-react'

const SeasonDropdown = props => {
  if (props.seasons===null) {
    return null // No season data, don't show the dropdown
  }
  let dropdowns = []
  for (var i=1; i<=props.seasons; i++) {
    dropdowns.push({text: 'Season ' + i, value: i});
  }

  return(
    <Dropdown placeholder='Season' fluid value={props.value}
      selection scrolling options={dropdowns} onChange={props.handleSeason}
    />
  )
}

export default SeasonDropdown;
