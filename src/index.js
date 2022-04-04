import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import App from './App';
import DarkThemeProvider from './redux/theme/DarkThemeProvider';

const rootElement = document.getElementById('root');
render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <DarkThemeProvider>
            <App />
        </DarkThemeProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  rootElement
);
