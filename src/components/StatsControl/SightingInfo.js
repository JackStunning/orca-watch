import React from 'react';
import PropTypes from "prop-types";

function SightingInfo(props){
  console.log("masterList ",props.masterList);
  return(
    <React.Fragment>
      <h2>Info and Stats</h2>
      <hr />
      <h3>Last Seen:</h3>
      <p>{props.masterList[props.masterList.length - 1].dateSeen.toDateString()}</p>
      <h3>Last Location Seen:</h3>
        <p>{props.masterList[props.masterList.length-1].location}</p>
      <h3>Total Seen:</h3>
        <p>{props.masterList.length}</p>
      </React.Fragment>
  );
}

SightingInfo.propTypes = {
  dateSeen: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default SightingInfo;