
import './App.css';
import AppHeader from './components/Header';
import Floors from './components/Floors';
import R from './components/R';

const colorseats = [
  {
    text: "Room",
    k: 7

  },
  {
    text: "Room",
    k: 14
  },
  {
    text: "Room",
    k: 9
  }

];

function App() {
  const colorElements = colorseats.map((color,index) => {return <R key={index} color={color} /> })
  
  return (
    <div className="App">

      <AppHeader />

      <div className='Bg-Room'>
        <h1>F1</h1>
        {colorElements}

      </div>

      <Floors title='F1' />
      <Floors title='F2' />
     
     

    </div>
  );
}

export default App;
