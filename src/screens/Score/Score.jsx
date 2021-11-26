import { useEffect, useState, useContext } from "react";
import sampleScore from "./SampleScore";
import { Link } from "react-router-dom";

import styles from "./Score.module.css";
import UserContext from "../../contexts/usercontext";
import video from '../../assets/videobackgroundscores.mp4';


export default function Score() {
  const [podium, setPodium] = useState();
  const [nonPodium, setNonPodium] = useState();
  const { user, setUser, setChore } = useContext(UserContext);

  useEffect(() => {
    setPodium(sampleScore.slice(0, 3));
    setNonPodium(sampleScore.slice(3));
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
    <div className={styles.jukebox}>
      <video className={styles.backgroundVideo} src={video} autoPlay loop muted />
      {podium && (
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

      <div className={styles.options}>
        <Link to="/game">
          <button className={styles.gameButton}>New Game</button>
        </Link>
        <Link to="/">
          <button className={styles.gameButton}>Main menu</button>
        </Link>
        </div>

      {nonPodium && (
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
    </div>
  );
}
