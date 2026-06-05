import React from 'react'

function CelestialCard({name, image, type, distance}) {
  return (
    <div className='card_parent'>
      <div className='the_card'>
          {/* name use {} for jsx expressions*/}
          <h2>{name}</h2>
          {/* img */}
          <img src={image} alt="celestial image"/>
          {/* type */}
          <h3>{type}</h3>
          {/* distance */}
          <p>{distance}</p>
      </div>
    </div>
  )
}

export default CelestialCard