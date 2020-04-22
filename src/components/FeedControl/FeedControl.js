import React from 'react';
import Card from './Card';

class FeedControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <React.Fragment>
        <h2>Orca Feed</h2>
        <hr />
        {this.props.masterList.map((card, i) =>
        <Card masterList={this.props.masterList[i]} />
        )}
      </React.Fragment>
    );
  }
}

export default FeedControl;