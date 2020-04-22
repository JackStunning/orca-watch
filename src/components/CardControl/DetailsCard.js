import React from 'react';

function DetailsCard(props) {
  return(
    <React.Fragment>
      <p>Date of sighting: {props.dateSeen}</p>
      <p>Orcas spotted at {props.location}</p>
      <p>Adult? {props.adult}</p>
      <p>Offsprings sighted? {props.offspring}</p>
      <p>Number of offsprings sighted: {props.numberOfOffspring}</p>
      <p>Sighted with their pod? {props.withPod}</p>
    </React.Fragment>
  );
}

export default DetailsCard;