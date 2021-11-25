import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import background from "./assets/background.png";

import UserContext from "./contexts/usercontext";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Accueil from "./screens/Accueil/Accueil";
import Game from "./screens/Game/Game";
import Score from "./screens/Score/Score";

import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [score, setScore] = useState(0);
  const [chore, setChore] = useState([
    0, 1, 0, 1, 0, 1, 0, 1, 6, 0, 6, 1, 6, 0, 6, 1, 4, 5, 4, 5, 4, 5, 4, 5, 0,
    1, 2, 3, 0, 1, 2, 3, 6, 0, 6, 1, 6, 0, 6, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3,
    2, 1, 0, 3, 2, 1, 5, 1, 5, 3, 5, 1, 5, 3, 4, 0, 4, 2, 4, 0, 4, 2, 0, 1, 0,
    1, 0, 1, 0, 1, 6, 0, 6, 1, 6, 0, 6, 1, 4, 5, 4, 5, 4, 5, 4, 5, 0, 1, 2, 3,
    0, 1, 2, 3, 6, 0, 6, 1, 6, 0, 6, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0,
    3, 2, 1, 5, 1, 5, 3, 4, 0, 4, 2, 1, 0, 6, 6, 6,
  ])

  const handleUserLogin = () => {};
  return (
    <div className="App">
      <div className="backgroundContainer">
        <img src={background} alt="background" />
      </div>
      <div className="dark"></div>
      <BrowserRouter>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
            score: score,
            setScore: setScore,
            chore: chore,
            setChore: setChore,
          }}
        >
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
