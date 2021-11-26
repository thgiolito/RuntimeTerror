import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserContext from "./contexts/usercontext";
import Header from "./components/Header/Header";
import Accueil from "./screens/Accueil/Accueil";
import Game from "./screens/Game/Game";
import Score from "./screens/Score/Score";

import "./App.css";

function App() {
  const [ user, setUser ] = useState("");
  const [ score, setScore ] = useState(0);
  const handleUserLogin = () => {
  };
  return (
    <div className="App">
      <div className="background"></div>
      <div className="dark"></div>
      <BrowserRouter>
        <UserContext.Provider value={{ user: user, setUser: setUser, score: score, setScore: setScore }}>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/game" element={<Game />} />
          <Route path="/score" element={<Score />} />
        </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
