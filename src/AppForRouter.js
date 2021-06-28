import "./App.css";
import React from "react";
//import React, { useState, useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, About, Events, Contact } from "./Pages";

function AppRouter() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default AppRouter;
