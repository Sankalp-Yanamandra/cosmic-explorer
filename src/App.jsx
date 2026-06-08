import React from 'react'
import Navbar from './components/Navbar'
import './components/styles.css'
import Hero from './components/Hero'
import CelestialCard from './components/CelestialCard'
import DiscoveryForm from './components/DiscoveryForm'

// rfce enter 

// functional component : a js fn that returns jsx
function App() {

  // sample data to test
  const celestialBodies = [
    {
      name: "Mars",
      type: "Planet",
      distance: "225 million km",
      image: "/src/assets/mars.jpg"
    },
    {
      name: "Andromeda",
      type: "Galaxy",
      distance: "2.537 million light-years",
      image: "/src/assets/andromeda.jpg"
    },
    {
      name: "Betelgeuse",
      type: "Red Supergiant Star",
      distance: "642.5 light-years",
      image: "/src/assets/betelgeuse.webp"
    }
  ];



  return (
    <div>
      <Navbar/>
      <Hero/>
      <DiscoveryForm/>
      {/* jsx expression in {} (similar to js ${}) */}
      <div className='card_parent'>
        <CelestialCard name={celestialBodies[0].name} image={celestialBodies[0].image} type={celestialBodies[0].type} distance={celestialBodies[0].distance}/>
        <CelestialCard name={celestialBodies[1].name} image={celestialBodies[1].image} type={celestialBodies[1].type} distance={celestialBodies[1].distance}/>
        <CelestialCard name={celestialBodies[2].name} image={celestialBodies[2].image} type={celestialBodies[2].type} distance={celestialBodies[2].distance}/>
      </div>
    </div>
  )
}

export default App