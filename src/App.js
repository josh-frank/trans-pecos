import './App.css';
import Cactus from './components/Cactus';
import Mesa from './components/Mesa';
import SunAndMoon from './components/SunAndMoon';

function App() {

  return (
    <>
      <Cactus />
      <Mesa />
      <SunAndMoon />
      <div className="ground"></div>
    </>
  );

}

export default App;
