import React from 'react';
import { v4 } from 'uuid';

function NewCard(props) {

  function handleNewCardSubmission(event) {
    event.preventDefault();
    props.onNewCardCreation({
      dateSeen: new Date(),
      adult: isBool(event.target.adult.value),
      offspring: parseInt(event.target.offspring.value, 10),
      numberofOffspring: parseInt(event.target.numberOfOffspring.value, 10),
      withPod: isBool(event.target.withPod.value),
      location: event.target.location.value,
      id: v4()
    });
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
      <h2>Add a New Orca Sighting</h2>
      <hr />
      <form onSubmit={handleNewCardSubmission}>
        {/* <input
          type='string'
          name='dateSeen'
          value={new Date()}
          hidden
        /> */}
        {/* class="radioButton" */}
        <div className="radio">
          Did the orca have any offsprings?
          <br />
          <label htmlFor="offspring">
            Yes
            <input type="radio" name="offspring" value="true" class="radioButton" unchecked />
          </label>
          <label htmlFor="offspring">
            No
            <input type="radio" name="offspring" value="false" class="radioButton" unchecked />
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
            <input type="radio" name="adult" value="true" class="radioButton" unchecked={toString()} />
          </label>
          <label htmlFor="adult">
            Juvenile
            <input type="radio" name="adult" value="false" class="radioButton" unchecked={toString()} />
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
            <input type="radio" name="withPod" value="true" class="radioButton" unchecked={toString()} />
          </label>
          <label htmlFor="withoutPod">
            Without a Pod
            <input type="radio" name="withPod" value="false" class="radioButton" unchecked={toString()} />
          </label>
        </div>
        <br />

        <button type='submit'>Submit Orca Card</button>
      </form>
    </React.Fragment>
  );
}

export default NewCard;

// If you want to write it to the DOM, pass a string instead: unchecked = "true" or unchecked = { value.toString() }.