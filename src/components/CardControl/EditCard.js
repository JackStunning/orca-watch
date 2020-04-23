import React from 'react';
import PropTypes from 'prop-types';

function EditCard(props) {

  // console.log("PROPS OF EDITCARD:", props);

  // currentVisibleState = <EditCard card={this.props.selectedCard} onEditingCard={this.handleEditingCard} />
  const initalId = props.card.id;
  // console.log("Value of f:", initalId);
  function handleEditCardSubmission(event) {
    event.preventDefault();
    let cardToEdit = {
      dateSeen: new Date,
      adult: isBool(event.target.adult.value),
      offspring: isBool(event.target.offspring.value, 10),
      numberofOffspring: parseInt(event.target.numberOfOffspring.value, 10),
      withPod: isBool(event.target.withPod.value),
      location: event.target.location.value.toString(),
      id: initalId
    };
    console.log("CARD TO EDIT:", cardToEdit);
    props.onEditingCard(cardToEdit);
  }

  function isBool(string) {
    if (string === "true") {
      return true;
    }
    else {
      return false;
    }
  }

  return (
    <React.Fragment>
      <h1>CURRENTLY EDITING {props.card.id}</h1>
      <hr />


      <form onSubmit={handleEditCardSubmission}>
        <div className="radio">
          Did the orca have any offsprings?
          <br />
          <label htmlFor="offspring">
            Yes
            <input type="radio" name="offspring" value="true" unchecked />
          </label>
          <label htmlFor="offspring">
            No
            <input type="radio" name="offspring" value="false" unchecked />
          </label>
        </div>
        <br />

        <label htmlFor="numberOfOffspring">
          How many offspring did this Orca have?
        </label>
        <br />
        <select name="numberOfOffspring">
          <option value="1">1 offspring</option>
          <option value="2">2 offspring</option>
          <option value="3">3 offspring</option>
        </select>
        <br />
        <br />

        <label htmlFor="location">
          Where did you see the Orca?
        </label>
        <br />
        <select name="location">
          <option value="Puget Sound">Puget Sound</option>
          <option value="San Juan Islands">San Juan Islands</option>
          <option value="Vancouver Islands">Vancouver Islands</option>
        </select>
        <br />

        <br />
        <div className="radio">
          <label htmlFor="withPod">
            Was this Orca an Adult?
        </label>
          <br />
          <label htmlFor="adult">
            Adult
            <input type="radio" name="adult" value="true" unchecked={toString()} />
          </label>
          <label htmlFor="adult">
            Juvenile
            <input type="radio" name="adult" value="false" unchecked={toString()} />
          </label>
        </div>
        <br />

        <div className="radio">
          <label htmlFor="withPod">
            Did you see this Orca ?
        </label>
          <br />
          <label htmlFor="withPod">
            With a Pod
            <input type="radio" name="withPod" value="true" unchecked={toString()} />
          </label>
          <label htmlFor="withoutPod">
            Without a Pod
            <input type="radio" name="withPod" value="false" unchecked={toString()} />
          </label>
        </div>
        <br />
        <input type="text" name="id" value={initalId} />
        <button type='submit'>Edit Orca Card</button>
      </form>
    </React.Fragment>
  );
}

EditCard.propTypes = {
  card: PropTypes.object,
  onEditingCard: PropTypes.func
};

export default EditCard;