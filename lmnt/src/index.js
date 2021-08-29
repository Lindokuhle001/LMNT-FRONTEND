import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import reducer,{initialState} from './Reducer';
import {StateProvider} from './StateProvider';
import './index.css'

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <React.StrictMode>
      <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      </StateProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );