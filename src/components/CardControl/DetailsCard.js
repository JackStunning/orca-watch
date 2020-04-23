import React from 'react';
import PropTypes from "prop-types";

function DetailsCard(props) {
  return (
    <React.Fragment>
      <h1>This is DetailsCard</h1>

      <p>Date of sighting: {props.card.dateSeen.toDateString()}</p>
      <p>Orcas spotted at {props.card.location}</p>
      <p>Adult? {props.card.adult.toString()}</p>
      <p>Offsprings sighted? {props.card.offspring.toString()}</p>
      <p>Number of offsprings sighted: {props.card.numberOfOffSpring}</p>
      <p>Sighted with their pod? {props.card.withPod.toString()}</p>
    </React.Fragment>
  );
}

DetailsCard.propTypes = {
  dateSeen: PropTypes.object,
  location: PropTypes.string,
  adult: PropTypes.bool,
  offspring: PropTypes.bool,
  numberOfOffSpring: PropTypes.number,
  withPod: PropTypes.bool
}

export default DetailsCard;