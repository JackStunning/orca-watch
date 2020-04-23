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
      <button onClick={() => props.onEditCard()}>Edit</button>
    </React.Fragment >
  );
}


// props.masterCardList.id

// handleEditingCard = (editCard) => {
//   let editedList = this.state.masterCardList.filter(card => card.id !== editCard.id);
//   const newMasterCardList = editedList.concat(editCard);
//   this.setState({
//     masterCardList: newMasterCardList,
//     formVisibleOnPage: false
//   });
//   console.log("Edited list! " + newMasterCardList);
// }


// handleChangingSelectedCard = (id) => {
//   const selectedCard = this.state.masterCardList.filter(card => card.id === id)[0];
//   this.setState({ selectedCard: selectedCard });
// }

Card.propTypes = {
  whenCardClicked: PropTypes.func,
  masterCardList: PropTypes.array,
  id: PropTypes.string
}

export default Card;