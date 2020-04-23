import React from 'react';
import NewCard from './NewCard';
import DetailsCard from './DetailsCard';
import EditCard from './EditCard';

class CardControl extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {
    // we want to be able to cycle between C R U 


    let currentVisibleState = null;
    console.log("PROPS IN CARDCONTROL: ", this.props);

    if (this.props.selectedCard != null) {
      console.log("Details should appear!");
      console.log("SELECTED CARD:", this.props.selectedCard);
      currentVisibleState = <DetailsCard card={this.props.selectedCard} />
    } else if (this.props.editing) {
      console.log("Edit Form should appear!");
      currentVisibleState = <EditCard card={this.props.selectedCard} />
    } else if (this.props.formVisibleOnPage) {
      console.log("Form should appear!");
      currentVisibleState = <NewCard onNewCardCreation={this.props.onNewCard} />
    }

    return (
      <React.Fragment>
        {currentVisibleState}
      </React.Fragment>
    );
  }
}

export default CardControl;