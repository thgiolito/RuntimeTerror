import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Accueil from "./screens/Accueil/Accueil";
import Game from "./screens/Game/Game";
import Score from "./screens/Score/Score";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <div className="dark"></div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/game" element={<Game />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
