
import './App.css';
import AppHeader from './components/Header';
import Floors from './components/Floors';
import R from './components/R';
import L from './components/L';
import B from './components/B';

const colorseats = [
  {
    text: "MRoom",
    k: 9

  }
];
const colorseatsL = [
    {
      text: "LRoom",
      l: 6
  
    }

];
const colorseatsB = [
  {
    text: "Room",
    b: 1

  }

];

function App() {
  const colorElements = colorseats.map((color,index) => {return <R key={index} color={color} /> })
  const colorElementsL = colorseatsL.map((colort,indext) => {return <L key={indext} color={colort} /> })
  const colorElementsB = colorseatsB.map((colort,indext) => {return <B key={indext} color={colort} /> })
  
  return (
    <div className="App">

      <AppHeader />

      <div className='Bg-Room'>
        <h1>F1</h1>
        {colorElements}
        {colorElementsL}
        {colorElementsB}

      </div>

      <Floors title='F1' />
      <Floors title='F2' />
     
     

    </div>
  );
}

export default App;
