import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"

// eslint-disable-next-line
import "swiper/css/bundle";

import { Authprovider } from './context/authCont/authContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Authprovider>
    <App />
    </Authprovider>
  </React.StrictMode>
);
