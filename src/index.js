import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { IsLoggedInProvider } from 'components/IsLoggedInContext';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsLoggedInProvider>
      <BrowserRouter basename="/Phonebook">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          closeOnClick
          pauseOnHover
          theme="colored"
        />
        <App />
      </BrowserRouter>
    </IsLoggedInProvider>
  </React.StrictMode>
);
