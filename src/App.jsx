import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Accueil from "./screens/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import Game from "./screens/Game/Game";
import Header from "./components/Header/Header";
import Score from "./screens/Score/Score";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Accueil />
        <Game />
        <Score />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
