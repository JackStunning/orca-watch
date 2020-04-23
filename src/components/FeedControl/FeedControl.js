import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

class FeedControl extends React.Component {

  constructor(props) {
    super(props);
  }

  // <FeedControl masterCardList={this.state.masterCardList} onCardSelection={this.handleChangingSelectedCard} onEditCard={this.handleDisplayEditCard} />

  render() {
    return (
      <React.Fragment>
        <h2>Orca Feed</h2>
        <hr />
        {this.props.masterCardList.map((card, i) =>
          <Card
            masterCardList={this.props.masterCardList[i]}
            whenCardClicked={this.props.onCardSelection}
            onEditCard={this.props.onEditCard}
          />
        )}
      </React.Fragment>
    );
  }
}

// onEditCard
// this is the whenEditClicked={this.props.onEditCard}


FeedControl.propTypes = {
  masterCardList: PropTypes.array,
  whenCardClicked: PropTypes.func,
  whenEditClicked: PropTypes.func
};

export default FeedControl;