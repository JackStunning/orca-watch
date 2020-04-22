import React from 'react';
import NewCard from './NewCard';

class CardControl extends React.Component {



  render() {
    // we want to be able to cycle between C R U 

    let currentVisibleState = <NewCard />;
    return (
      <React.Fragment>
        {currentVisibleState}
      </React.Fragment>
    );
  }


}

export default CardControl;