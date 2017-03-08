import React from 'react';

class IMDB extends React.Component {
  render() {
    return (
      <div>
        <a href={'http://www.imdb.com/title/' + this.props.imdbid} target="_blank">link</a>
      </div>
    );
  }
}

export default IMDB;
