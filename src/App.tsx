import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import HomeMenu from "./components/Home/Home";
import Hangman from "./components/Hangman/Hangman";
import wordle from "./components/Wordle/wordle";
import about from "./components/About/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <HomeMenu/> } />
        <Route path="/hangman" Component={Hangman} />
        <Route path="/wordle" Component={wordle} />
        <Route path="/about" Component={about} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;