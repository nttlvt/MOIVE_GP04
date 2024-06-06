import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ReactToastifyProvider from './contexts/ReactToastifyProvider.jsx';
import { Provider } from 'react-redux';
import { store } from './store/index.js';
import { ReactQueryProvider } from './contexts/ReactQueryProvider.jsx';

ReactDOM.render(
  <React.StrictMode>
    <ReactToastifyProvider>
      <BrowserRouter>
        <Provider store={store}>
          <ReactQueryProvider>
            <App />
          </ReactQueryProvider>
        </Provider>
      </BrowserRouter>
    </ReactToastifyProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
