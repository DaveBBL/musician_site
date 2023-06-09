import { useEffect, useState } from "react";
import useSound from "use-sound"; // for handling the sound
import song2039 from "../app/assets/DKeH_2039.mp3"; // importing the music
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // icons for play and pause
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // icons for next and previous track
import { IconContext } from "react-icons"; // for customazing the icons
import { Card, CardTitle } from 'reactstrap'
import styles from "./Player.module.css";

// Thanks to Suraj Vishwakarma: https://dev.to/documatic/building-a-music-player-in-react-2aa4
// I tweeked the first useEffect to replace [isPlaying] with [duration] as the dependency, as
// elint demanded. Also reformatted to use reactstrap's Card components.

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    min: "",
    sec: "",
  });
  const [currTime, setCurrTime] = useState({
    min: "",
    sed: "",
  });

  const [seconds, setSeconds] = useState();

  const [play, { pause, duration, sound }] = useSound(song2039);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTime({
        min: min,
        sec: secRemain,
      });
    }
  }, [duration]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([])); // setting the seconds state with the current state
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <Card className={styles.center}>
      <CardTitle>Frank Tuttle</CardTitle>
      <div>
        <img
          className={styles.musicCover}
          src="https://picsum.photos/200/200"
          alt="random"
          height="200px"
          width="200px"
        />
      </div>
      <CardTitle>30 Years Later</CardTitle>
      <div>
        <div className="time">
          {/* <p>
            {currTime.min}:{currTime.sec}
          </p> */}
          <p>
            {time.min}:{time.sec}
          </p>
        </div>
        <input
          type="range"
          min="0"
          max={duration / 1000}
          default="0"
          value={seconds}
          className="timeline"
          onChange={(e) => {
            sound.seek([e.target.value]);
          }}
        />
      </div>
      <div>
        <button className={styles.playButton}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipPrevious />
          </IconContext.Provider>
        </button>
        {!isPlaying ? (
          <button className={styles.playButton} onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPlayCircle />
            </IconContext.Provider>
          </button>
        ) : (
          <button className={styles.playButton} onClick={playingButton}>
            <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
              <AiFillPauseCircle />
            </IconContext.Provider>
          </button>
        )}
        <button className={styles.playButton}>
          <IconContext.Provider value={{ size: "3em", color: "#27AE60" }}>
            <BiSkipNext />
          </IconContext.Provider>
        </button>
      </div>
    </Card>
  );
};

export default Player;
