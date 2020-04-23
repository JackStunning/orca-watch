import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {

  return (
    <React.Fragment>
      <h3> This is an Orca Card</h3>
      <p>{props.masterList.location}</p>
      <p>{props.masterList.id}</p>
      <button onClick={() => props.whenCardClicked(props.masterList.id)}>Details</button>
    </React.Fragment >
  );
}

// handleChangingSelectedCard = (id) => {
//   const selectedCard = this.state.masterCardList.filter(card => card.id === id)[0];
//   this.setState({ selectedCard: selectedCard });
// }

Card.propTypes = {
  whenCardClicked: PropTypes.func,
  masterList: PropTypes.array,
  id: PropTypes.string
}

export default Card;