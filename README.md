<div align="center">

<!-- title -->
<h1>Cosmic Explorer</h1>

<!-- licence -->
<a href="https://github.com/sankalp-yanamandra/cosmic-explorer/blob/main/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
</a>

<!-- gif/screenshot if req -->
<p>will write later.</p>
<br/>

<!-- project logo -->
  <img src="src/assets/logo.png" alt="Project Logo" width="100" height="100">

<br/>

<!-- description -->
<p>will write later.</p>
</div>

## 🛠️ Tools Used
<!-- to handle UI components and states -->
#### Library : UI components and state management
- React

#### Build Tool : compiling and local deployment(build)
- Vite

#### Languages
-  CSS, JavaScript (v.ES6), JavaScript XML (JSX)

## 🔍 Concepts Used/Applied

- JSX rules : 
```javascript
// i. jsx expressions in {}
name={celestialBodies[0].name}
// ii. parent element req MUST
funtion App(){
    // js code
    return(
        <div> //parent element
            {/*jsx code and comment like this*/}
        </div>
    )
}
// iii. all tags must be closed or self-closed
<Navbar/>
<img ... />
<h1>....</h1>
// iv. component file name must begin with Capital letter
Navbar.jsx
Hero.jsx
// v. class => className
<header className = 'nav'>
....
</header>

// vi. for inline styling style = {{camelCaseProp:value;...}}
<span style={{fontSize: "20px",fontWeight: "900",color:"#fff", letterSpacing:"6px", textShadow: "0 0 10px #00f0ff, 0 0 20px #0066ff, 0 0 40px #9900ff"}}>HEllo World</span> 
```
- Functional component
```javascript
function Navbar(){
    //js code
    return(
        //jsx code

        //returns jsx code
    )
}
```
- CSS Flexbox stylings
```css
.nav {
    /* Turns on Flexbox for the header, default displays children side by side (inline) */
    display: flex; 
    /* Push the logo/title to the extreme left, links to the extreme right, on Main axis = X-axis */
    justify-content: space-between;
    /* Vertically centering items/children within the navbar, Cross axis = on Y-axis */ 
    align-items: center;
}
```
- Props (properties to send READ-ONLY i/p from parent to child component)
```javascript
// parent component
function App(){
    //js code
    return(
        <div>
        {/*or name={celestialBodies[0].name}*/} 
        <CelestialCard name="Mars"/>
        </div>
    )
}
//child component
function CelestialCard(props){
    return(
        <div>
            <h2>Name : {props.name}</h2>
        </div>
    )
}
```

- Destructuring : extract values from arrays/objects and store in variables
```javascript
// parent component
function App(){
    //js code
    return(
        <div>
        {/*or name={celestialBodies[0].name}*/} 
        <CelestialCard name="Mars"/>
        </div>
    )
}
//child component
function CelestialCard({name}){
    return(
        <div>
            <h2>Name : {name}</h2>
        </div>
    )
}
```
- js ES6 : `let` and `const` keywords to declare/initialize variables
```javascript
const celestialBodies = [...]
```

<!-- exam Qs, go through later
1. what is px
2. what is vite 
3. what is nodejs
4. what is npm
5. what is release in github, is it req for proj-->

## Installation and Setup

1. **Clone this repo**
```bash
git clone https://github.com/Sankalp-Yanamandra/cosmic-explorer.git
```
2. **Navigate to project directory**
```bash
cd cosmic-explorer
```
3. **Install Node Package Modules**
```bash
npm install
```
4. **start local development server**
```bash
npm run dev
```
