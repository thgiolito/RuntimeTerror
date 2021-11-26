import { useEffect, useState, useContext } from "react";
import sampleScore from "./SampleScore";
import { Link } from "react-router-dom";

import axios from "axios";

import styles from "./Score.module.css";
import UserContext from "../../contexts/usercontext";

export default function Score() {
  const [podium, setPodium] = useState([]);
  const [nonPodium, setNonPodium] = useState([]);
  const [fetchedScore, setFetchedScore] = useState([]);
  const { user, score, setUser, setChore } = useContext(UserContext);

  const postScore = async () => {
    try {
      const resp = await axios.post("http://localhost:3001/api/scores", user, score) 
      console.log(resp.data);
    } catch (err) {
      console.log(err);
    }
  }

  
  useEffect(() => {
    const fetchScore = async () =>{
      const {data} = await axios.get("http://localhost:3001/api/scores")
      setFetchedScore(data)
    }
    
    fetchScore()
    console.log(fetchedScore);
  }, []);
  
  useEffect(() => {
    if (podium) setPodium(fetchedScore.slice(0, 3));
    if (nonPodium) setNonPodium(fetchedScore.slice(3));
    setChore([
      0, 1, 0, 1, 0, 1, 0, 1, 6, 0, 6, 1, 6, 0, 6, 1, 4, 5, 4, 5, 4, 5, 4, 5, 0,
      1, 2, 3, 0, 1, 2, 3, 6, 0, 6, 1, 6, 0, 6, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3,
      2, 1, 0, 3, 2, 1, 5, 1, 5, 3, 5, 1, 5, 3, 4, 0, 4, 2, 4, 0, 4, 2, 0, 1, 0,
      1, 0, 1, 0, 1, 6, 0, 6, 1, 6, 0, 6, 1, 4, 5, 4, 5, 4, 5, 4, 5, 0, 1, 2, 3,
      0, 1, 2, 3, 6, 0, 6, 1, 6, 0, 6, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0, 3, 2, 1, 0,
      3, 2, 1, 5, 1, 5, 3, 4, 0, 4, 2, 1, 0, 6, 6, 6,
    ]);
  }, []);
  return (
    <> {

    <div className={styles.container}>
      {(podium.length !== 0) && (
        <div className={styles.podiumContainer}>
          <div>
            <p className={styles.podiumName}>{podium[1].user}</p>
            <div className={styles.secondPlace}>
              <p className={styles.podiumScore}>{podium[1].score}</p>
            </div>
          </div>
          <div>
            <p className={styles.podiumName}>{podium[0].user}</p>
            <div className={styles.firstPlace}>
              <p className={styles.podiumScore}>{podium[0].score}</p>
            </div>
          </div>
          <div>
            <p className={styles.podiumName}>{podium[2].user}</p>
            <div className={styles.thirdPlace}>
              <p className={styles.podiumScore}>{podium[2].score}</p>
            </div>
          </div>
        </div>
      )}

      {(nonPodium.length !== 0) && (
        <div className={styles.nonPodiumContainer}>
          <div className={styles.nonPodiumRanks}>
            {nonPodium.map((x, i) => (
              <p className={styles.nonPodiumRank} key={i}>
                {i + 4}
              </p>
            ))}
          </div>
          <div className={styles.nonPodiumNames}>
            {nonPodium.map((x, i) => (
              <p className={styles.nonPodiumName} key={i}>
                {x.user}
              </p>
            ))}
          </div>
          <div className={styles.nonPodiumScores}>
            {nonPodium.map((x, i) => (
              <p className={styles.nonPodiumScore} key={i}>
                {x.score}
              </p>
            ))}
          </div>
        </div>
      )}
      <div className={styles.options}>
        <Link to="/game">
          <button onClick={postScore} className={styles.gameButton}>New Game</button>
        </Link>
        <Link to="/">
          <button onClick={postScore} className={styles.gameButton}>Main menu</button>
        </Link>
      </div>
    </div>
    }
    </>
  );
}
