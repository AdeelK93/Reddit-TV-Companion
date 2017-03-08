import React from 'react';

class Reddit extends React.Component {
  render() {
    if (this.props.show==='') {
      return null
    }
    // Release date in Unix seconds
    const airDate = Math.floor(this.props.released.getTime() / 1000)
    const oneWeek = airDate + 604800
    return (
      <div>
        <a href={'https://www.reddit.com/search?sort=top&q=(and%20text:%27'+this.props.show+'%27%20timestamp:'+airDate+'..'+oneWeek+')&syntax=cloudsearch'} target="_blank">link</a>
      </div>
    );
  }
}

export default Reddit;
