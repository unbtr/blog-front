import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from "./components/Header";

import './css/app.css';

const App = () => (
  <Router>
    <Header />
    <div className="main">
      <Routes />
    </div>
  </Router>
);

export default App;
