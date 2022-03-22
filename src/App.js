import { useEffect, useState,  useRef} from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [result, setResult] = useState(0);

  const memory = useRef(0);


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
    setResult("");
   // setSecondNumber("");
  }

  function savevalueHandler(event) {
    memory.current = result;
    console.log(memory.current);

  }

  function copyvalueHandler(event) {
    setSecondNumber(memory.current);
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

  return (
    <>
      <h1>Calculadora</h1>
      <input
          type="text"
          value={firstNumber}
          onChange={changeFirstNumberHandler}
      />
      <br />
      <br />
      <input 
          type="text" 
          value={secondNumber} 
          onChange={changeSecondNumberHandler} 
      />
      <br />
      <br />
      <button 
          value="+" 
          onClick={addHandler}>
            +
      </button>
      <button 
          value="-" 
          onClick={subtractHandler}>
            -
      </button>
      <button 
          value="x" 
          onClick={multiplyHandler}>
            x
      </button>
      <button 
          value="/" 
          onClick={divideHandler}>
            /
      </button>
      <br />
      <br />
      <button 
          value="C" 
          onClick={deleteHandler}>
            C
      </button>
      <button 
          value="M+" 
          ref={memory}
          onClick={savevalueHandler}>
            M+
      </button>
      <button 
          value="MR" 
          onClick={copyvalueHandler}>
            MR
      </button>
      <p>Resultado: {result}</p>
    </>
  );
}

export default App;
