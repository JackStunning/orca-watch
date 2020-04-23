import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class FeedControl extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h2>Orca Feed</h2>
        <hr />
        {this.props.masterList.map((card, i) =>
          <Card
            masterList={this.props.masterList[i]}
            whenCardClicked={this.props.onCardSelection}
          />
        )}
      </React.Fragment>
    );
  }
}

FeedControl.propTypes = {
  masterList: PropTypes.array,
  whenCardClicked: PropTypes.func
};

export default FeedControl;