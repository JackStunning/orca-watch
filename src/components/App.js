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

  handleEditingCard = (editCard) => {
    let editedList = this.state.masterCardList.filter(card => card.id !== editCard.id);
    const newMasterCardList = editedList.concat(editCard);
    this.setState({
      masterCardList: newMasterCardList,
      formVisibleOnPage: false
    });
    console.log("Edited list! " + newMasterCardList);
  }

  handleAddingNewCardToList = (newCard) => {
    const newMasterCardList = this.state.masterCardList.concat(newCard);
    this.setState({
      formVisibleOnPage: true,
      masterCardList: newMasterCardList
    });
    console.log(this.state.masterCardList);
  }

  handleChangingSelectedCard = (id) => {
    const selectedCard = this.state.masterCardList.filter(card => card.id === id)[0];
    this.setState({
      selectedCard: selectedCard,
      formVisibleOnPage: false
    });
    console.log("Details selected! ", id);
  }

  handleDisplayDefaultView = () => {
    console.log("Header clicked!");
    this.setState({ formVisibleOnPage: true });
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
          <div id="CardControl">
            <CardControl onNewCard={this.handleAddingNewCardToList} selectedCard={this.state.selectedCard} editing={this.state.editing} formVisibleOnPage={this.state.formVisibleOnPage} />
          </div>
          <div id="FeedControl">
            <FeedControl masterCardList={this.state.masterCardList} onCardSelection={this.handleChangingSelectedCard} onEditCard={this.handleEditingCard} />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App;
