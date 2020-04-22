import React from 'react';
import NewCard from './NewCard';

class CardControl extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    // we want to be able to cycle between C R U 

    // onNewCard={this.handleAddingNewCardToList}
    let currentVisibleState = <NewCard onNewCardCreation={this.props.onNewCard} />;
    return (
      <React.Fragment>
        {/* <DetailsCard/>
        <EditCard/> */}
        {currentVisibleState}
      </React.Fragment>
    );
  }


}

export default CardControl;