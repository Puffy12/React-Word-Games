import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMenu from "./components/Home/Home";
import Hangman from "./components/Hangman/Hangman";
import Wordle from "./components/Wordle/wordle"; 
import About from "./components/About/About";
import Crossword from "./components/Crossword/crossword"; 
import MiniCrossword from "./components/MiniCrossword/minicrossword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeMenu />} />
        <Route path="/hangman" element={<Hangman />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/about" element={<About />} />
        <Route path="/crossword" element={<Crossword />} />
        <Route path="/minicrossword" element={<MiniCrossword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
