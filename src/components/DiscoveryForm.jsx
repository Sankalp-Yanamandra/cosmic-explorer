import React, { useState } from "react";

// importing font-awesome icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';


function DiscoveryForm() {

    // states for storing values of input entered by user in the form
    let [celestial_name, setCelestialName] = useState('')
    let [celestial_type, setCelestialType] = useState('')
    let [celestial_distance, setCelestialDistance] = useState('')
    let [celestial_image, setCelestialImage] = useState('')


    // on submitting the form, make an object of all values stored in the state for each input field
    function handleSubmit(submitevent){
        // prevent page from reloading, as soon as form is submitted
        submitevent.preventDefault()

        // store these values inside an object
        let new_celestial = {
            name : celestial_name, 
            image : celestial_image, 
            type : celestial_type, 
            distance : celestial_distance
        }

        console.log(new_celestial)

        // clear input fields on the webpage
        setCelestialName('')
        setCelestialType('')
        setCelestialDistance('')
        setCelestialImage('')

    }


  return (
    <section className="my-collections">
      <form action="" className="add-collections" onSubmit={handleSubmit}>
        {/* name of the celestial body  -- required*/}
        <label htmlFor="celestial_name" className="required-field">
            {/* vertical-align to make the asterisk superscript */}
          Celestial Body name<FontAwesomeIcon icon={faAsterisk} style={{ color: "red", fontSize: "10px", verticalAlign: "super"}} />
        </label>
        <input
          type="text"
          placeholder="Enter Celestial name"
          id="celestial_name"
          required
          name="celestial_body_name"
          // on typing trigger the event : onChange whose action would be to set value of the state with value entered by user
          value={celestial_name}
          onChange={(typeevent)=>{setCelestialName(typeevent.target.value)}}
        />

        {/* type of celestial body -- required*/}
        <label htmlFor="celestial_type" className="required-field">
            {/* vertical-align to make the asterisk superscript */}
          Celestial Type<FontAwesomeIcon icon={faAsterisk} style={{ color: "red", fontSize: "10px",verticalAlign: "super"}} />
        </label>
        <select name="celestial_type" id="celestial_type" required         
          // on typing trigger the event : onChange whose action would be to set value of the state with value entered by user
          value={celestial_type}
          onChange={(typeevent)=>{setCelestialType(typeevent.target.value)}}>

          {/* no value for 1st option, since used as label */}
          <option value="">Select type of celestial body</option>

          <option value="star">Star</option>
          <option value="planet">Planet</option>
          <option value="dwarf_planet">Dwarf Planet</option>
          <option value="moon">Moon (Natural Satellite)</option>
          <option value="asteroid">Asteroid</option>
          <option value="comet">Comet</option>
          <option value="meteoroid">Meteoroid</option>
          <option value="nebula">Nebula</option>
          <option value="galaxy">Galaxy</option>
          <option value="black_hole">Black Hole</option>
          <option value="star_cluster">Star Cluster</option>
          
        </select>

        {/* distance from earth -- required*/}
        <label htmlFor="celestial_distance" className="required-field" >
            {/* vertical-align to make the asterisk superscript */}
          Distance from Me<FontAwesomeIcon icon={faAsterisk} style={{ color: "red", fontSize: "10px",verticalAlign: "super"}} />
        </label>
        <input
          type="text"
          placeholder="Enter distance from Earth"
          id="celestial_distance"
          required
          name="earth_distance"
          // on typing trigger the event : onChange whose action would be to set value of the state with value entered by user
          value={celestial_distance}
          onChange={(typeevent)=>{setCelestialDistance(typeevent.target.value)}}
        />
        {/* image link -- required*/}
        <label htmlFor="celestial_image" className="required-field">
            {/* vertical-align to make the asterisk superscript */}
          Image URL<FontAwesomeIcon icon={faAsterisk} style={{ color: "red", fontSize: "10px", verticalAlign: "super"}} />
        </label>
        <input
          type="text"
          placeholder="Enter image url"
          id="celestial_image"
          required
          name="celestial_image"
          // on typing trigger the event : onChange whose action would be to set value of the state with value entered by user
          value={celestial_image}
          onChange={(typeevent)=>{setCelestialImage(typeevent.target.value)}}
        />

        <button type="submit">Save To My Collections</button>
      </form>
    </section>
  );
}

export default DiscoveryForm;
