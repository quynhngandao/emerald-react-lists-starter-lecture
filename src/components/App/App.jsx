import { useState } from "react";
import "./App.css";

function App() {
  const [creatureList, setCreatureList] = useState([
    { name: "Unicorn", origin: "Britain" },
    { name: "Sphinx", origin: "Egypt" },
    { name: "Jackalope", origin: "America" },
  ]);

  return (
    <>
      <header className="Header">
        <h1>React Mythical Creatures</h1>
      </header>
      <div className="App">
        <div>
          Splatting to the DOM looks like this:
          <pre>
            {/* We can use JSON.stringify() to dump raw data into our DOM */}
            {JSON.stringify(creatureList)}
          </pre>
          <p>
            Getting one creature looks like:
            {creatureList[0].name} is from {creatureList[0].origin}
          </p>
          {/* map method: looping over creatureList, for each creature: return new <ul> */}
          {/* .map always loop through array and return new array */}
         <ul>
          {creatureList.map( function (creature) {
             console.log(creature);
             // key let React uniquely identify each element 
             // we want to use something unique for a key - usually database id
            return (
              <li
                key={creature.name}>{creature.name} is from {creature.origin}
              </li>
            );
          })}
          </ul>
          {/* VARIATION of .map ARROW FUNCTION*/}
          <ul>
          {creatureList.map((creature) => {
            return (
              <li>
                {creature.name} is from {creature.origin}
              </li>
            );
          })}
          </ul>
          {/* VARIATION of .map IMPLICIT FUNCTION: no parenthesis around parameters */}
          <ul>
          {creatureList.map(creature => <li>{creature.name} is from {creature.origin}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
