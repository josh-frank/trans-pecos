import { useState } from 'react';
import './App.css';
import Cactus from './components/Cactus';
import Mesa from './components/Mesa';
import SunAndMoon from './components/SunAndMoon';
import Tumbleweed from './components/Tumbleweed';

function App() {

  const [ night, toggleNight ] = useState( false );

  return (
    <>
      <button
        className="night-button"
        onClick={ () => toggleNight( !night ) }
        style={ { color: night ? "#FAFAFF" : "#872E3F" } }
      >
        { night ? "☼" : "☾" }
      </button>
      <Cactus />
      <Mesa night={ night ? true : null } />
      <SunAndMoon night={ night ? true : null } />
      <Tumbleweed />
      <div className="ground"></div>
      <div
        className="sky"
        style={ { backgroundColor: night ? "#222B60" : "#E3BB83" } }
      ></div>
      <a
        href="https://github.com/josh-frank/trans-pecos"
        target="_blank"
        rel="noreferrer"
        style={ {
          position: "absolute",
          top: "90%",
          left: "90%",
          fontSize: "small",
          fontFamily: "Sans-Serif",
          color: "#FAFAFF"
        } }
      >
        GITHUB
      </a>
    </>
  );

}

export default App;
