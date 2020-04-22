import React from 'react';
import PropTypes from "prop-types";

function SightingInfo(props){
  return(
    <>
      <h3>Info and Stats</h3><br />
      <p>Last Seen: {this.props.dateSeen}</p>
      <p>Last Location Seen: {this.props.location}</p>
      <p>Total Seen: 46</p>
    </>
  );
}

export default SightingInfo;