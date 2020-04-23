import React from 'react';
import SightingInfo from './SightingInfo';

class StatsControl extends React.Component {
  constructor(props) {
    super(props);
  }
  // <StatsControl masterCardList={this.state.masterCardList}/>
  render() {
    // let currentVisibleState = <SightingInfo {...this.props} />;
    return (

      <React.Fragment>
        <SightingInfo masterCardList={this.props.masterCardList} />
      </React.Fragment>
    );
  }

}

export default StatsControl; 