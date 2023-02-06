import { useState } from 'react';
import Celebration from './Celebration';
import { list } from './data';
import bbz_logo from './bbz-logo.svg';
import { useEffect } from 'react';
import Loader from './Loader';
function App() {
  // Create Main list 
  // Math.Choose a name from the main list
  // Delete the choosen name from the main list
  // Add the choosen name to the winners list
  // when reach 100 names in winners, stop and show resaults

  const [main_list, setMain_list] = useState([]);
  var winners = [];
  const [final_winners, setFinal_winners] = useState([])
  const [done, setDone] = useState(false);
  const [raffiling, setRaffiling] = useState(false)
  const chooseEmployees = () => {
    // get the name and delete it from main list // loop n times
    for (let i = 0; i < 30; i++) {
      // get the index of shoosen name
      let index_of_the_name = Math.floor(Math.random() * main_list.length);
      let employee = main_list.splice(index_of_the_name, 1)[0].name;
      winners.push(employee);
      setFinal_winners(winners);
    }
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const Rdelay = async () => {
    await delay(5000);
    chooseEmployees()
    setDone(true);
    // await delay(2000);
    // console.log("Waited an additional 2s");
  };



  const start_draw = () => {
    setRaffiling(true)
    Rdelay();
  };
  useEffect(() => {
    setMain_list(list);
  }, [])

  return (
    <div className="App">
      <div className='header'><img className="logo" src={bbz_logo} alt="logo" /></div>


      <div className="container">
        {/* <div onClick={start_draw} style={{ zIndex: 100 }}>Start Draw</div>
        <h1 style={{ zIndex: 100 }}>Delay</h1> */}
        {/* <div onClick={() => console.log('winners', final_winners)} style={{ zIndex: 100 }}>show winners</div> */}
        {!done ? (raffiling ? <Loader /> : <h1 className="btn-shaffle" onClick={start_draw}>
          RAFFLE
        </h1>

        ) : (
          <>
            <h2 className="cong">CONGRATULATIONS</h2>
            <p className="winner-is">FOR WINNING YOUR FAVOURITE BRANDED FOOTWEAR</p>
            <div className='resaults-grid'>{final_winners.map((name) => {
              return <div className='card'><p className="winner" key={name}>{name.toString()}</p></div>
            })}</div>
            <Celebration />
          </>
        )}



      </div>
    </div>
  );
}

export default App;
