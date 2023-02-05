import { useState } from 'react';
import Celebration from './Celebration';
import { list } from './data';
import logo from './logo.svg';
import element1 from './element1.svg';
import element2 from './element2.svg';
import { useEffect } from 'react';
function App() {
  // Create Main list 
  // Math.Choose a name from the main list
  // Delete the choosen name from the main list
  // Add the choosen name to the winners list
  // when reach 100 names in winners, stop and show resaults

  const [main_list, setMain_list] = useState([]);
  var winners = [];
  const [final_winners, setFinal_winners] = useState([{ name: '', id: '' }])
  const [done, setDone] = useState(false);
  const [raffiling, setRaffiling] = useState(false)
  const chooseEmployees = () => {
    // get the name and delete it from main list // loop n times
    for (let i = 0; i < 100; i++) {
      // get the index of shoosen name
      let index_of_the_name = Math.floor(Math.random() * main_list.length);
      let employee = main_list.splice(index_of_the_name, 1)[0].name;
      // console.log('EMPLOYEE', employee)
      // console.log('I', i)
      // console.log('ITEM', item)

      winners.push(employee);
      setFinal_winners(winners)
      console.log('WINNERS', final_winners)

    }
    console.log('Draw Done')
    // return employee;
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const Rdelay = async () => {
    await delay(2000);
    chooseEmployees()
    setDone(true);
    await delay(2000);
    console.log("Waited an additional 2s");
  };



  const start_draw = () => {
    setRaffiling(true)
    Rdelay();

    // console.log('final_winners', final_winners)
  };
  useEffect(() => {
    setMain_list(list);

  }, [])

  return (
    <div className="App">
      <div className="container">
        {/* <div onClick={start_draw} style={{ zIndex: 100 }}>Start Draw</div>
        <h1 style={{ zIndex: 100 }}>Delay</h1> */}
        {/* <div onClick={() => console.log('winners', final_winners)} style={{ zIndex: 100 }}>show winners</div> */}
        <img className="logo" src={logo} alt="logo" />
        {!done ? (raffiling ? '' : <h1 className="btn-shaffle" onClick={start_draw}>
          RAFFLE
        </h1>

        ) : (
          <>

            <h2 className="cong">Congratulations</h2>
            <h2 className="winner-is">WINNERS ARE</h2>
            <div className='resaults-grid'>{final_winners.map((name) => {
              return <div className='card'><p className="winner" key={name}>{name.toString()}</p></div>
            })}</div>
            <Celebration />
            <img className='element1' src={element1} alt="element1" />
            <img className='element2' src={element2} alt="element1" />
          </>
        )}



      </div>
    </div>
  );
}

export default App;
