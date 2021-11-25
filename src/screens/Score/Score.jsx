import { useEffect, useState } from "react";
import sampleScore from "./SampleScore";
import { Link } from "react-router-dom";

import styles from "./Score.module.css";

export default function Score() {
  const [podium, setPodium] = useState();
  const [nonPodium, setNonPodium] = useState();

  useEffect(() => {
    setPodium(sampleScore.slice(0, 3));
    setNonPodium(sampleScore.slice(3));
  }, []);

  return (
    <div className={styles.container}>
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

      {nonPodium && (
        <div className={styles.nonPodiumContainer}>
          <div className={styles.nonPodiumRanks}>
            {nonPodium.map((x, i) => (
              <p className={styles.nonPodiumRank} key={i}>{i + 4}</p>
            ))}
          </div>
          <div className={styles.nonPodiumNames}>
            {nonPodium.map((x, i) => (
              <p className={styles.nonPodiumName} key={i}>{x.user}</p>
            ))}
          </div>
          <div className={styles.nonPodiumScores}>
            {nonPodium.map((x, i) => (
              <p className={styles.nonPodiumScore} key={i}>{x.score}</p>
            ))}
          </div>
        </div>
      )}
      <Link to="/game">
        <button>New Game</button>
      </Link>
      <Link to="/">
        <button>Main menu</button>
      </Link>
    </div>
  );
}
