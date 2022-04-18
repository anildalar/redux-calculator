import { useDispatch, useSelector } from 'react-redux';
import { number } from '.';
import './App.css';

function App() {
  //
  let state = useSelector((storeObject)=>{
    return storeObject;
  });

  let dispatch = useDispatch();


  return (
    <div className="App">
      <div className="calculator">
        {console.log(state.result )} 
        <input type="text" className="calculator-screen" value={state.result} disabled />

        <div className="calculator-keys">
          
          <button type="button" className="operator" value="+" onClick={()=>{dispatch({type:'ADDITION'})}}>+</button>
          <button type="button" className="operator" value="-" onClick={()=>{dispatch({type:'SUBTRACTION'})}}>-</button>
          <button type="button" className="operator" value="*" onClick={()=>{dispatch({type:'MULTIPLICATION'})}}>&times;</button>
          <button type="button" className="operator" value="/" onClick={()=>{dispatch({type:'DIVISION'})}}>&divide;</button>

          <button type="button" value="7" onClick={(e)=>{ dispatch(number(e.target.value)) }}>7</button>
          <button type="button" value="8" onClick={(e)=>{ dispatch(number(e.target.value)) }}>8</button>
          <button type="button" value="9" onClick={(e)=>{ dispatch(number(e.target.value)) }}>9</button>


          <button type="button" value="4" onClick={(e)=>{ dispatch(number(e.target.value)) }}>4</button>
          <button type="button" value="5" onClick={(e)=>{ dispatch(number(e.target.value)) }}>5</button>
          <button type="button" value="6" onClick={(e)=>{ dispatch(number(e.target.value)) }}>6</button>


          <button type="button" value="1" onClick={(e)=>{ dispatch(number(e.target.value)) }}>1</button>
          <button type="button" value="2" onClick={(e)=>{ dispatch(number(e.target.value)) }}>2</button>
          <button type="button" value="3" onClick={(e)=>{ dispatch(number(e.target.value)) }}>3</button>


          <button type="button" value="0" onClick={(e)=>{ dispatch(number(e.target.value)) }}>0</button>
          <button type="button" className="decimal" value=".">.</button>
          <button type="button" className="all-clear" value="all-clear" onClick={()=>{dispatch({type:'CLEAR'})}}>AC</button>

          <button type="button" className="equal-sign" value="=" onClick={()=>{dispatch({type:'RESULT'})}}>=</button>

        </div>
        </div>
    </div>
  );
}

export default App;
