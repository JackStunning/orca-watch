import React from 'react';
import { v4 } from 'uuid';

function NewCard(props) {

  function handleNewCardSubmission(event) {
    event.preventDefault();
    props.onNewCardCreation({
      dateSeen: event.target.dateSeen.value, 
      adult: event.target.adult.value, offspring: parseInt(event.target.offspring.value, 10), 
      numberofOffspring: parseInt(event.target.numberOfOffspring.value, 10), 
      withPod: event.target.withPod.value, 
      location: event.target.location.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h3>Add a New Orca Sighting</h3>
      <form onSubmit={handleNewCardSubmission}> 
        <input
          type='string'
          name='dateSeen'
          value={new Date()}
          hidden
        />


        <div class="radio">
          <p>Did the orca have any offsprings?</p>
          <label for="offspring">
            Yes
            <input type="radio" name="offspring" value="true" unchecked />
          </label>
          <label for="offspring">
            No
            <input type="radio" name="offspring" value="false" unchecked />
          </label>
        </div>
        <br />

        <label for="numberOfOffspring">
          How many offspring did this Orca have? 
        </label>
        <br />
        <select name="numberOfOffspring">
          <option value="1">1 offspring</option>
          <option value="2">2 offspring</option>
          <option value="3">3 offspring</option>
        </select> 
        <br />

        <label for="location">
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
        <div class="radio">
          <label for="withPod">
            Was this Orca an Adult?
        </label>
        <br />
          <label for="adult">
            Adult
            <input type="radio" name="adult" value= "true" unchecked />
          </label>
          <label for="adult">
            Juvenile
            <input type="radio" name="adult" value= "false" unchecked />
          </label>
        </div>
        <br />

        <div class="radio">
          <label for="withPod">
            Did you see this Orca ?
        </label>
        <br />
          <label for="withPod">
            with a Pod
            <input type="radio" name="withPod" value="true" unchecked />
          </label>
          <label for="withoutPod">
             without a Pod
            <input type="radio" name="withPod" value="false" unchecked />
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