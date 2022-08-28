import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "../src/Navbar/Navbar.js"
import Main from "../src/Main/Main.js"
import Device from "../src/Devices/Device/Device.js"
import Audio from "./Devices/Audio/Audio.js"
import Home from "../src/Devices/For_Home/For_Home.js"
import Popular from "../src/Devices/Popular_products/Popular.js"
// import Explore from "./Explore/Explore.js"
import Search from './Search/Search.js';
import Grid from "./Grid/Grid.js";



import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <Device />
    <Audio />
    <Home />
    <Popular />
    {/* <Explore /> */}
    <Search />
    <Grid />

  </React.StrictMode >
);

reportWebVitals();
