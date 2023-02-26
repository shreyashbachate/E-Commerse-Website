import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import TempRoute from './TempRoute';


// ReactDOM.render(Routing, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TempRoute />
  </React.StrictMode>
);
