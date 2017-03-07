import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const SeasonDropdown = props => {
  if (props.seasons===null) {
    return null // No season data, don't show the dropdown
  }
  let dropdowns = []
  for (var i=1; i<=props.seasons; i++) {
    dropdowns.push(<MenuItem value={i} primaryText={'Season ' + i} key={i} />);
  }

  return(
    <DropDownMenu value={props.value} onChange={props.handleSeason} className='top17' >
      {dropdowns}
    </DropDownMenu>
  )
}

export default SeasonDropdown;
