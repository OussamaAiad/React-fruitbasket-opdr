import React from 'react';
import './App.css';
import Counter from "./Components/Counter";

function App() {
    const[aardbeiCounter, setAardbeiCounter]= React.useState(0);
    const[banaanCounter, setBanaanCounter]= React.useState(0);
    const[appelCounter, setAppelCounter]= React.useState(0);
    const[kiwiCounter, setKiwiCounter]= React.useState(0);

    function reset (){
        setAardbeiCounter(0)
        setBanaanCounter(0)
        setAppelCounter(0)
        setKiwiCounter(0)
    }

  return (
    <>
      <h1>Fruitmand bezorgservice</h1>

        <div className="card">
            🍓 Aardbeien
           <Counter fruitName={aardbeiCounter} setFruitName={setAardbeiCounter}/>
        </div>

        <div className="card">
            🍌 Bananen
            <Counter fruitName={banaanCounter} setFruitName={setBanaanCounter}/>

        </div>

        <div className="card">
            🍎 Appels
            <Counter fruitName={appelCounter} setFruitName={setAppelCounter}/>

        </div>

        <div className="card">
            🥝 Kiwi's
            <Counter fruitName={kiwiCounter} setFruitName={setKiwiCounter}/>

        </div>

        <button id="reset"
        onClick={reset}
        > Reset </button>




        <form>
            <div>
            Voornaam
            <input form />
            </div>
            <br/>


            <div>
            Achternaam
            <input form/>
            </div>
            <br/>

            <div>
            Leeftijd
            <input form placeholder="0"/>
            </div>
            <br/>
            <div>
                Postcode
                <input form placeholder="0"/>
            </div>
            <br/>
            <div>
                Bezorg frequentie
                <select>
                <option>  iedere week </option>
                    <option> om de week </option>
                    <option> iedere maand </option>
                </select>

                <input type="radio" /> Overdag
                <input type="radio" /> 's avonds
            </div>

            <div>
                Opmerking
                <textarea />
            </div>
            <div>
                <input type="checkbox"/> Ik ga akkoord met de voorwaarden

            </div>

            <button type="button" >  Verzend  </button>


        </form>
    </>
  );
}

export default App;
