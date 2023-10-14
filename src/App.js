import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#about">Hobbies</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <h1>Info</h1>
        <p>Name: Mahima</p>
        <p>Age: 19 </p>
        <p>Location: India</p>
      </header>
      <div className="About" id="about">
        <h2>About Me</h2>
        <p>
          Hey there! I'm Mahima. Feel free to contact me.
        </p>
      </div>
      <div className="Projects" id="projects">
        <h2>Hobbies</h2>
        Watching Movies
      </div>
      <div className="Contact" id="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach via email:</p>
        <p>Email: <a mailto="myemail@gmail.com">myemail@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/" target="_blank" rel="noopener noreferrer">github.com/me</a></p>
      </div>
    </div>
  );
}

export default App;