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
        {this.props.masterCardList.map((card, i) =>
          <Card
            masterCardList={this.props.masterCardList[i]}
            whenCardClicked={this.props.onCardSelection}
            whenEditClicked={this.props.onEditCard}
          />
        )}
      </React.Fragment>
    );
  }
}
// this is the whenEditClicked={this.props.onEditCard}


FeedControl.propTypes = {
  masterCardList: PropTypes.array,
  whenCardClicked: PropTypes.func
};

export default FeedControl;