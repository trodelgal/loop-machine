import React, { useEffect, useState } from "react";
import {
  Wrapper,
  GridDiv,
} from "../styles/styledComponents";
import Playlist from "./Playlist";
import Pad from "./Pad";
import {loopsArr} from "../loops/Howls";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";

export default function QueueMachine() {
  const classes = useStyles();
  const [controlButtons, setControlButtons] = useState("stop");
  const [playingNow, setPlayingNow] = useState();
  const [loopEnd, setLoopEnd] = useState(false);
  const [playList, setPlayList] = useState([]);
  const [audioState, setAudioState] = useState(loopsArr);

  // Audio controller (PLAY/STOP)
  const changeController = (event, newValue) => {
    if (playingNow) {
      setControlButtons(newValue);
    }
  };

  const padClick = (loop, index) => {
    setPlayList([...playList, loop]);
  };

  // Find the first on playlist or stop the loop if the playlist end
  useEffect(() => {
    if (playList[0]) {
      if (!playingNow) {
        setPlayingNow(playList[0]);
      }
    } else {
      setControlButtons("stop");
    }
  }, [playList]);

  // Start the music
  useEffect(() => {
    if (playingNow) {
      playingNow.src.on("end", () => {
        setLoopEnd(true);
      });
      setControlButtons("play");
      playingNow.src.play();
      setLoopEnd(false);
    }
  }, [playingNow]);

  // On the end of the playing now
  useEffect(() => {
    if (loopEnd) {
      let newPlayList = playList.slice(1);
      setPlayingNow(null);
      setPlayList(newPlayList);
    }
  }, [loopEnd]);

  // On controller buttons click
  useEffect(() => {
    if (controlButtons === "play") {
      playingNow.src.play();
    } else if (controlButtons === "pause") {
      playingNow.src.pause();
    } else if (controlButtons === "stop") {
      if (playingNow) {
        playingNow.src.stop();
        setLoopEnd(true)
        setPlayingNow();
        setPlayList([]);
      }
    }
  }, [controlButtons]);

  return (
    <>
      <Wrapper>
        <GridDiv repeatFormula="1fr 1fr 1fr">
          {audioState.map((loop, index) => (
            <Pad key={index} loop={loop} padClick={padClick} />
          ))}
        </GridDiv>
        <BottomNavigation
          value={controlButtons}
          onChange={changeController}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            className={classes.label}
            label="STOP"
            value="stop"
            icon={<StopIcon />}
          />
          <BottomNavigationAction
            className={classes.label}
            label="PLAY"
            value="play"
            icon={<PlayArrowIcon />}
          />
          <BottomNavigationAction
            className={classes.label}
            label="PAUSE"
            value="pause"
            icon={<PauseIcon />}
          />
        </BottomNavigation>
        <Playlist playlistLoop={playList} setPlayList={setPlayList} />
      </Wrapper>
    </>
  );
}

// controller style
const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: 5,
    background: "none",
    color: "white",
  },
  label: {
    color: "white",
  },
});