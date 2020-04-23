import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <React.Fragment>
      <div onClick={props.whenHeaderClicked}>
        <h1>Orca Watch</h1>
      </div>
    </React.Fragment>
    // TODO: make the header a link to go back home default view
  );
}

Header.propTypes = {
  whenHeaderClicked: PropTypes.func
};

export default Header;