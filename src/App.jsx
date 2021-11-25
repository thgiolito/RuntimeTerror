import { useState } from "react";

import Accueil from "./screens/Accueil/Accueil";
import Footer from "./components/Footer/Footer";
import Game from "./screens/Game/Game";
import Header from "./components/Header/Header";
import Score from "./screens/Score/Score";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Accueil />
      <Game />
      <Score />
      <Footer />
    </div>
  );
}

export default App;
