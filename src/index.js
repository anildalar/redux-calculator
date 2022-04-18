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
      alert('ADDITION');
      break;
    case 'SUBTRACTION':
      alert('SUBTRACTION');
      break;
    case 'MULTIPLICATION':
      alert('MULTIPLICATION');
      break;
    case 'DIVISION':
      alert('DIVISION');
      break;
    case 'RESULT':
      alert('RESULT');
      break;
    case 'CLEAR':
      alert('CLEAR');
      break;

    default:


  }

  return newState;
}
let storeObjecct = createStore(rootReducer,0);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={storeObjecct}>
      <App />
    </Provider>
  </React.StrictMode>
);