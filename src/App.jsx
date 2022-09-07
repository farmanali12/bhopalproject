import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
// import Dashboard from "./components/Dashboard";
import Dashboard from "./components/components/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
