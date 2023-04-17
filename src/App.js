import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import Cookbook from './cookbook';
function App() {
  return (
      <BrowserRouter>
        <div className="container-xl">
          <Routes>
            <Route path="/*" element = {<Cookbook/>}/>
          </Routes>

        </div>

      </BrowserRouter>
  );
}

export default App;
