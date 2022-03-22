import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [firstNumber, setFirstNumber] = useState(null);
  const [secondNumber, setSecondNumber] = useState(null);
  const [result, setResult] = useState(0);



  function changeFirstNumberHandler(event) {
    setFirstNumber(event.target.value);
  }

  function changeSecondNumberHandler(event) {
    setSecondNumber(event.target.value);
  }

  function addHandler(event) {
    setResult(parseFloat(firstNumber) + parseFloat(secondNumber));
  }

  function subtractHandler(event) {
    setResult(parseFloat(firstNumber) - parseFloat(secondNumber));
  }

  function multiplyHandler(event) {
    setResult(parseFloat(firstNumber) * parseFloat(secondNumber));
  }

  function divideHandler(event) {
    setResult(parseFloat(firstNumber) / parseFloat(secondNumber));
  }


  //function clearHandler(event) {}

  function deleteHandler(event) {
    
  }

  function savevalueHandler(event) {

  }

  function copyvalueHandler(event) {

  }



  useEffect(
    () => {
      console.log("firstNumber state:", firstNumber);
      console.log("secondNumber state:", secondNumber);
      console.log("result state:", result);


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
