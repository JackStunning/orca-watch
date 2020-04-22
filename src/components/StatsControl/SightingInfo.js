import React from 'react';
import PropTypes from "prop-types";

{/* <SightingInfo masterList={this.props.masterList} /> */}
function SightingInfo(props){
  console.log("masterList ",props.masterList);
  return(
    <React.Fragment>
      <h3>Info and Stats</h3><br />
      <p>Last Seen: {props.masterList[props.masterList.length-1].dateSeen.toDateString()} </p>
      <p>Last Location Seen: {props.masterList[props.masterList.length-1].location}</p>
      <p>Total Seen: {props.masterList.length}</p>
      </React.Fragment>
  );
}

SightingInfo.propTypes = {
  dateSeen: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default SightingInfo;