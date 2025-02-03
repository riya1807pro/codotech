import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from './App';
//import Homepage from './Home/Homepage';
import PlayScreen from './Playground/PlayScreen';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes >
      <Route path="/" element={<App />}/>
      <Route path="/PlayScreen" element={<PlayScreen />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

