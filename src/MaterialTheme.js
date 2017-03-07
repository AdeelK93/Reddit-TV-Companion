// The Material module serves as a wrapper for the app's theme
// Can pass a className to Material to wrap in a BS container, for example

import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green500, green700, deepOrange500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green500,
    primary2Color: green700,
    pickerHeaderColor: green700,
    accent1Color: deepOrange500
  },
  appBar: {height: 50}
});

const Material = props => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className={props.className}>
        {props.children}
      </div>
    </MuiThemeProvider>
  )
}

export default Material;
