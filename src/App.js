// Calculadora
import { useEffect, useState, useRef } from 'react';
import './App.css';
import History from './Components/History/History.jsx';

function App() { // Componente APP()
  // const asociadas a un hook State
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(null);
  const [resultsHistory, setResultsHistory] = useState([]);
  // const asociada a un hook Ref
  const memory = useRef(0);

  // asigno en la const num el valor parseado del input
  function changeFirstNumberHandler(event) {
    const num = parseFloat(event.target.value);
    // si en num no hay ningún número y saldría NaN se pone el input en 0
    if (isNaN(num)) {
      setFirstNumber(0);
    } else {
      setFirstNumber(num);
    }
  }

  function changeSecondNumberHandler(event) {
    // la función global parseFloat toma el parámetro que se le da y retorna un valor numérico decimal
    const num = parseFloat(event.target.value);
    if (isNaN(num)) {
      setSecondNumber(0);
    } else {
      setSecondNumber(num);
    }
  }

  /*
  function changeSecondNumberHandler(event) {
    setSecondNumber(parseFloat(event.target.value));
  }
  */

  function addHandler(event) {
    setResult(firstNumber + secondNumber);
  }

  function subtractHandler(event) {
    setResult(firstNumber - secondNumber);
  }

  function multiplyHandler(event) {
    setResult(firstNumber * secondNumber);
  }

  function divideHandler(event) {
    setResult(firstNumber / secondNumber);
  }

  // pone en 0 los input firstNumber y secondNumber y vacia Resultado (onClick button C)
  function deleteHandler(event) {
    setFirstNumber("0")
    setSecondNumber("0")
    setResult(null);
    // setResult("");
  }

  function savevalueHandler(event) {
    memory.current = result;
    console.log(memory.current);

  }

  //[ ] Poner en input `firstNumber` el valor almacenado en `result` (botón MR) resultado guardado
  // para ello previamente almacenado en (botón M+)
  // el input `secondNumber` se queda en 0
  function copyvalueHandler(event) {
    setFirstNumber(memory.current);
  }

  useEffect( 
    () => {
      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber state:", secondNumber);
      console.log("result state:", result);
      console.log("M+:", memory);
      console.log("MR:", memory);
    }
  )

  useEffect(
    () => {
      // si resultado no es null 
      if (result != null) {
        console.log(result)
        // .from hace una copia del Array resultsHistory
        const newHistory = Array.from(resultsHistory);
        // se añaden los resultados en el Array newHistory (copia de Array resultsHistory) 
        newHistory.push(result)
        // se pasa newHistory como parámetro de la función setResultsHistory, y esta lo pasa a resultsHistory
        setResultsHistory(newHistory);

        // setResultsHistory([...resultsHistory, result]); // Dispersión, es lo mismo que las líneas de código anteriores
      }
    }, 
    [result] // useEffect() se ejecuta cuando tenga result
  )

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler} />
      <br />
      <br />
      <input type="text" value={secondNumber} onChange={changeSecondNumberHandler} />
      <br />
      <br />
      <button value="C" onClick={deleteHandler}>C</button>
      <br />
      <button value="M+" ref={memory} onClick={savevalueHandler}>M+</button>
      <button value="MR" onClick={copyvalueHandler}>MR</button>
      <br />
      <button value="+" onClick={addHandler}>+</button>
      <button value="-" onClick={subtractHandler}>-</button>
      <br />
      <button value="x" onClick={multiplyHandler}>x</button>
      <button value="/" onClick={divideHandler}>/</button>
      <p>Resultado: {result}</p>
      <p>Historial de operaciones</p>
      <br />
      {/* se incorpóra en su salida proporcionando como prop `results` el contenido de `resultsHistory` */}
      <History results={resultsHistory} />
    </>
  );
}

export default App;


// <p>Resultado: {result}</p>
// <p>{result.resultado}</p>  
