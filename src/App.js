import React, { Component } from "react";
import "./App.css";
import Home from './pages/home.js';
import EtrainingHome from './pages/etrainingHome.js'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/etrainingHome" element={<EtrainingHome />} />
        </Routes>
      </Router>
    );
  }
}

export default App;