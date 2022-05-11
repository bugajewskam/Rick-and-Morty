import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import  CharacterPage  from "./pages/CharacterPage";
import  CharactersPage  from "./pages/CharactersPage";

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path="characters" element={<CharactersPage />} />
        <Route path="character/1" element={<CharacterPage />} />
      </Routes>
    </div>
  );
}

export default App;
