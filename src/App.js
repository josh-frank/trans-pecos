import './App.css';
import Cactus from './components/Cactus';
import Mesa from './components/Mesa';
import SunAndMoon from './components/SunAndMoon';
import Tumbleweed from './components/Tumbleweed';

function App() {

  return (
    <>
      <Cactus />
      <Mesa />
      <SunAndMoon />
      <Tumbleweed />
      <div className="ground"></div>
    </>
  );

}

export default App;
