import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './redux/store';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
         <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  rootElement
);
