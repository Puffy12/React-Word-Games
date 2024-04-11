import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";
import HomeMenu from "./components/Home/Home";
import Hangman from "./components/Hangman/Hangman";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={ <HomeMenu/> } />
        <Route path="/hangman" Component={Hangman} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;