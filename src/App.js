import React, { Component } from "react";
import "./App.css";
import Home from './pages/home.js';
import EtrainingHome from './pages/etrainingHome.js'
import ModuleOneHome from './pages/moduleone-home.js'
import ModuleOneOne from './pages/moduleone-one.js'
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/etrainingHome" element={<EtrainingHome />} />
          <Route path="/moduleoneHome" element={<ModuleOneHome />} />
          <Route path="/moduleoneOne" element={<ModuleOneOne />} />
        </Routes>
      </Router>
    );
  }
}

export default App;