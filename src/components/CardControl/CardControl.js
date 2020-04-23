import React from 'react';
import NewCard from './NewCard';
import DetailsCard from './DetailsCard';

class CardControl extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    // we want to be able to cycle between C R U 


    let currentVisibleState = null;

    if (this.props.selectedCard != null) {
      console.log("SELECTED CARD:", this.props.selectedCard);
      currentVisibleState = <DetailsCard card={this.props.selectedCard} />
    } else {
      currentVisibleState = <NewCard onNewCardCreation={this.props.onNewCard} />
    }

    {/* <EditCard /> */ }

    return (
      <React.Fragment>
        {currentVisibleState}
      </React.Fragment>
    );
  }
}

export default CardControl;