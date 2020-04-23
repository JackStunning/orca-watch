import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  // console.log("PROPS IN CARD:", props);

  // <Card
  // masterCardList={this.props.masterCardList[i]}
  // whenCardClicked={this.props.onCardSelection}
  // onEditCard={this.props.onEditCard}
  // />

  return (
    <React.Fragment>
      <h3> This is an Orca Card</h3>
      <p>{props.masterCardList.location}</p>
      <p>{props.masterCardList.id}</p>
      <button onClick={() => props.whenCardClicked(props.masterCardList.id)}>Details</button>
      <button onClick={() => props.onEditCard(props.masterCardList.id)}>Edit</button>
    </React.Fragment >
  );
}

Card.propTypes = {
  whenCardClicked: PropTypes.func,
  masterCardList: PropTypes.array,
  id: PropTypes.string
}

export default Card;