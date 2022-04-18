import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  //
  let state = useSelector((storeObject)=>{
    return storeObject;
  });

  let dispatch = useDispatch();


  return (
    <div className="App">
      <div class="calculator">

        <input type="text" class="calculator-screen" value={state} disabled />

        <div class="calculator-keys">
          
          <button type="button" class="operator" value="+" onClick={()=>{dispatch({type:'ADDITION'})}}>+</button>
          <button type="button" class="operator" value="-" onClick={()=>{dispatch({type:'SUBTRACTION'})}}>-</button>
          <button type="button" class="operator" value="*" onClick={()=>{dispatch({type:'MULTIPLICATION'})}}>&times;</button>
          <button type="button" class="operator" value="/" onClick={()=>{dispatch({type:'DIVISION'})}}>&divide;</button>

          <button type="button" value="7">7</button>
          <button type="button" value="8">8</button>
          <button type="button" value="9">9</button>


          <button type="button" value="4">4</button>
          <button type="button" value="5">5</button>
          <button type="button" value="6">6</button>


          <button type="button" value="1">1</button>
          <button type="button" value="2">2</button>
          <button type="button" value="3">3</button>


          <button type="button" value="0">0</button>
          <button type="button" class="decimal" value=".">.</button>
          <button type="button" class="all-clear" value="all-clear" onClick={()=>{dispatch({type:'CLEAR'})}}>AC</button>

          <button type="button" class="equal-sign" value="=" onClick={()=>{dispatch({type:'RESULT'})}}>=</button>

        </div>
        </div>
    </div>
  );
}

export default App;
