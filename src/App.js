import { useEffect, useState,  useRef} from 'react';
import './App.css';
import History from './Components/History/History.jsx';

function App() { // Componente APP()
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(null);
  const memory = useRef(0);

  // hook de tipo state `resultsHistory`
  // se le da valor inicial de array vacío `[]`
  const [resultsHistory, setResultsHistory] = useState([]);

  function changeFirstNumberHandler(event) {
    setFirstNumber(parseFloat(event.target.value));
    
  }

  function changeSecondNumberHandler(event) {
    setSecondNumber(parseFloat(event.target.value));
  }

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

  function deleteHandler(event) {
    setFirstNumber("0")
    setSecondNumber("0")
    setResult(null);
   // setSecondNumber("");
  }

  function savevalueHandler(event) {
    memory.current = result;
    console.log(memory.current);

  }

  function copyvalueHandler(event) {
    setFirstNumber(memory.current);
  }

  //[ ] Poner en `firstNumber` el valor almacenado en `result`
  //Eliminar el valor de `secondNumber`


  useEffect(
    () => {
      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber state:", secondNumber);
      console.log("result state:", result);
      console.log("M+: ", memory);

    }
  )


  useEffect(
    ()=>{
      if(result!=null){
        console.log(result)
      setResultsHistory([...resultsHistory,result]);
    }
    },[result]
  )

  return (
    <>
      <h1>Calculadora</h1>
      <input type="text" value={firstNumber} onChange={changeFirstNumberHandler}/>
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
      <History results={resultsHistory}/> 
    </>
  );
}

export default App;


// <p>Resultado: {result}</p>
// <p>{result.resultado}</p>  
