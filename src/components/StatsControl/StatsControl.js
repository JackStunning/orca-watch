import React from 'react';
import SightingInfo from './SightingInfo';

class StatsControl extends React.Component {
  constructor(props){
    super(props);
  }
  // <StatsControl masterList={this.state.masterCardList}/>
  render() {
    // let currentVisibleState = <SightingInfo {...this.props} />;
    return (
      // this.props needed in Class component
      <>
        <SightingInfo masterList={this.props.masterList} />
        {/* {currentVisibleState} */}
      </>
    );
  }

}

export default StatsControl; 