import React from 'react';
import { v4 } from 'uuid';

function NewCard() {
  //   {
  //     dateSeen: new Date(2020, 4, 20),
  //     adult: false,
  //     offspring: false,
  //     numberOfOffSpring: 0,
  //     withPod: true,
  //   },
  return (
    <React.Fragment>
      <h3>Add a New Orca Sighting</h3>
      <form onSubmit={handleNewCardFormSubmission}>
        <input
          name='dateSeen'
        // value='dateobj'
        />
        <input
          type='number'
          name='numberOfOffspring'
          placeholder=' How many Offspring ' />
        />
        <input
          type='string'
          name='location'
          placeholder='Where did you see the Orca' />
        />
        <button type='submit'>Submit Orca Card</button>
      </form>
    </React.Fragment>
  );
}

export default NewCard;