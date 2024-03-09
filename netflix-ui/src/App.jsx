import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from './pages/Netflix';
import Player from './pages/Player';
import Movies from "./pages/Movies";
import Action from "./pages/Action";
import PPSU from "./pages/PPSU";
import MyList from "./pages/MyList";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route exact path="/login" element ={<Login />}/>
       <Route exact path="/" element ={<Signup/>}/>
       <Route exact path="/player" element ={<Player/>}/>
       <Route exact path="/netflix" element ={<Netflix/>}/>
       <Route exact path="/Movies" element ={<Movies/>}/>
       <Route exact path="tv/Action" element ={<Action/>}/>
       <Route exact path="Movies/PPSU" element ={<PPSU/>}/>
       <Route exact path="/MyList" element ={<MyList/>}/>
      </Routes>
    </BrowserRouter> 
  );  
}
