import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css'
import Home from "./pages/Home/Home";
import Payment from "./pages/Payment/Payment";

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/payment" element={<Payment/>}></Route>
    </Routes>

    </>
  )
}

export default App
