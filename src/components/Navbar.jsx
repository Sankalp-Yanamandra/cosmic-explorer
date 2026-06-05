import React from 'react'

function Navbar() {
  return (
    <header className='nav'>
        {/* title, logo and links to home, about etc */}
        <img src="/src/assets/logo.png" alt="logo" width="75px" height="50px"/>
        <h2>Cosmic Explorer</h2>

        <div className='navlinks'>
            <div>Home</div>
            <div>Missions</div>
            <div>About</div>
        </div>
    </header>
  )
}

export default Navbar