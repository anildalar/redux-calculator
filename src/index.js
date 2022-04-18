import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let rootReducer = (prevState,action)=>{
  let newState = prevState

  switch(action.type){ 
    case 'ADDITION':
      //alert('ADDITION');
      newState.operation = '+';
      break;
    case 'SUBTRACTION':
      newState.operation = '-';
      //alert('SUBTRACTION');
      break;
    case 'MULTIPLICATION':
      newState.operation = '*';
      //alert('MULTIPLICATION');
      break;
    case 'DIVISION':
      newState.operation = '/';
      //alert('DIVISION');
      break;
    case 'RESULT':
      //alert('RESULT');
      switch(newState.operation){
          case '+':
            newState.result = newState.leftValue + newState.rightValue;
            break;
          case '-':
            newState.result = newState.leftValue - newState.rightValue;
            break;
          case '*':
            newState.result = newState.leftValue * newState.rightValue;
            break;
          case '/':
            newState.result = newState.leftValue / newState.rightValue;
            break;
          default:
      }
      console.log(newState);
      break;
    case 'CLEAR':
      newState.result = 0;
      newState.leftValue = '';
      newState.operation = '';
      newState.rightValue = '';
      break;
    case 'NUMBER':
      //alert(action.number);
      console.log(newState);
      if(newState.operation === ""){
        if(newState.leftValue === ""){
          newState.leftValue = parseInt(action.number);
        }else{
          //Concatinatte
          newState.leftValue = parseInt(newState.leftValue + action.number)
        } 
      }else{
        if(newState.rightValue === ""){
          newState.rightValue = parseInt(action.number);
        }else{
          newState.rightValue = parseInt(newState.rightValue + action.number)
        }
      }
    default:
  }
  //console.log(newState);
  return newState;
}

export const number = (n)=>{  //Action Creator
  //alert(n);
  return {
    type:'NUMBER',
    number:n
  }
}

let storeObjecct = createStore(rootReducer,{
  result:0,
  leftValue:'',
  operation:'',
  rightValue:''
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeObjecct}>
      <App />
    </Provider>
  </React.StrictMode>
);