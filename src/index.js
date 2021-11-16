import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider, provider  } from 'react-redux'
import  store from './store'

import { positions, transitions, Provider as AlertProvider } from 'react-alert'
import Alerttemplate from 'react-alert-template-basic'

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}

ReactDOM.render(
  <Provider store={store} >
    <AlertProvider template={Alerttemplate} {...options}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
 
