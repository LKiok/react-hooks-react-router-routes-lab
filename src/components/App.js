import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>
    <NavBar/>
    <Router>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/directors" element={<Directors/>}/>
      <Route path="/actors" element={<Actors/>}/>
      <Route path="/" element={<Home/>}/>
    </Router>
    </div>;
}

export default App;
