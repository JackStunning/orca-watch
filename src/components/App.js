import React from 'react';
import './App.css';
import Header from './Header';
import StatsControl from './StatsControl/StatsControl';
import FeedControl from './FeedControl/FeedControl';
import CardControl from './CardControl/CardControl';
import DetailsCard from './CardControl/DetailsCard';

const masterCardList = [
  {
    dateSeen: new Date(2020, 3, 20),
    id: "sldkfjsdlkj",
    adult: true,
    offspring: true,
    numberOfOffSpring: 3,
    withPod: true,
    location: "Puget Sound",
  },

  {
    dateSeen: new Date(2020, 4, 20),
    id: "testestsets",
    adult: false,
    offspring: false,
    numberOfOffSpring: 0,
    withPod: true,
    location: "Puget Sound",
  },

  {
    dateSeen: new Date(2020, 4, 20),
    id: "yeyeyeeyey",
    adult: false,
    offspring: false,
    numberOfOffSpring: 0,
    withPod: true,
    location: "San Juan Islands",
  },

  {
    dateSeen: new Date(2020, 4, 23),
    id: "0239483209482309",
    adult: true,
    offspring: true,
    numberOfOffSpring: 2,
    withPod: true,
    location: "Vancouver Islands",
  },
];

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
      location: "jk",
      masterCardList: masterCardList,
      formVisibleOnPage: true,
      selectedCard: null,
      editing: false
    };
  }

  handleDisplayEditCard = (id) => {
    const selectedCard = this.state.masterCardList.filter(card => card.id === id)[0];
    this.setState({
      editing: true,
      formVisibleOnPage: false,
      selectedCard: selectedCard
    });
  }

  handleEditingCard = (editCard) => {
    let editedList = this.state.masterCardList.filter(card => card.id !== editCard.id);
    const newMasterCardList = editedList.concat(editCard);
    this.setState({
      editing: true,
      masterCardList: newMasterCardList,
      formVisibleOnPage: false,
      selectedCard: null
    });
    console.log("Edited list! " + newMasterCardList);
  }

  handleAddingNewCardToList = (newCard) => {
    const newMasterCardList = this.state.masterCardList.concat(newCard);
    this.setState({
      formVisibleOnPage: true,
      editing: false,
      masterCardList: newMasterCardList,
      selectedCard: null
    });
    console.log(this.state.masterCardList);
  }

  handleChangingSelectedCard = (id) => {
    const selectedCard = this.state.masterCardList.filter(card => card.id === id)[0];
    this.setState({
      selectedCard: selectedCard,
      formVisibleOnPage: false,
      editing: false
    });
    console.log("Details selected! ", id);
  }

  handleDisplayDefaultView = () => {
    console.log("Header clicked!");
    this.setState({
      formVisibleOnPage: true,
      editing: false,
      selectedCard: null
    });
    console.log(this.state.formVisibleOnPage);
  }


  render() {
    return (
      <React.Fragment>
        <div id="Header">
          <Header whenHeaderClicked={this.handleDisplayDefaultView} />
        </div>
        <hr />
        <div id="content">
          <div id="StatsControl">
            <StatsControl masterCardList={this.state.masterCardList} />
          </div>
          {/* selectedCard this is the card that we are selecting when we click     editing this is the boolian to toggle the view */}
          <div id="CardControl">
            <CardControl onEditingCard={this.handleEditingCard} editing={this.state.editing} onNewCard={this.handleAddingNewCardToList} selectedCard={this.state.selectedCard} formVisibleOnPage={this.state.formVisibleOnPage} />
          </div>

          {/* On EditCard is the function that  */}
          <div id="FeedControl">
            <FeedControl masterCardList={this.state.masterCardList} onCardSelection={this.handleChangingSelectedCard} onEditCard={this.handleDisplayEditCard} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
