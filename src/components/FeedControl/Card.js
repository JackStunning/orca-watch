import React from 'react';

function Card(props) {
  return (
    <React.Fragment>
      <h3>This is an Orca Card</h3>
      <p> {props.masterList.location}</p>
      <a href="#">Details</a> | <a href="#">Edit</a>
    </React.Fragment>
  );
}

export default Card;