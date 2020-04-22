import React from 'react';
import './App.css';
import Header from './Header';
// import StatsControl from './StatsControl/StatsControl';
// import FeedControl from './FeedControl/FeedControl';
import CardControl from './CardControl/CardControl';

// const masterCardList = [
//   {
//     dateSeen: new Date(2020, 3, 20),
//     adult: true,
//     offspring: true,
//     numberOfOffSpring: 3,
//     withPod: true,
//     location: "Puget Sound",
//   },

//   {
//     dateSeen: new Date(2020, 4, 20),
//     adult: false,
//     offspring: false,
//     numberOfOffSpring: 0,
//     withPod: true,
//     location: "Puget Sound",
//   },

//   {
//     dateSeen: new Date(2020, 4, 20),
//     adult: false,
//     offspring: false,
//     numberOfOffSpring: 0,
//     withPod: true,
//     location: "San Juan Islands",
//   },

//   {
//     dateSeen: new Date(2020, 4, 23),
//     adult: true,
//     offspring: true,
//     numberOfOffSpring: 2,
//     withPod: true,
//     location: "Vancouver Islands",
//   },
// ];



class App extends React.Component {
  constructor(props) {
    super(props);
    let currentDate = new Date();
    this.state = {
      dateSeen: currentDate.getDate(),
      adult: false,
      offspring: false,
      numberOfOffSpring: 0,
      withPod: false,
      location: "",
      masterCardList: []
    };
  }

  handleAddingNewCardToList = (newCard) => {
    const newMasterCardList = this.state.masterCardList.concat(newCard);
    this.setState({masterCardList: newMasterCardList});
    console.log(this.state.masterCardList);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        {/* <StatsControl /> */}
        <CardControl onNewCard={this.handleAddingNewCardToList} />
        {/* <FeedControl /> */}
      </React.Fragment>
    )
  }
}

export default App;
