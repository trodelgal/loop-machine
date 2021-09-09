import React, { useEffect, useState } from "react";
import {
  Wrapper,
  GridDiv,
  Header,
  Title,
  MainTitle,
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

export default function Main() {
  const classes = useStyles();
  const [controlButtons, setControlButtons] = useState("stop");
  const [loop, setLoop] = useState();
  const [loopEnd, setLoopEnd] = useState(false);
  const [playList, setPlayList] = useState([]);
  const [audioState, setAudioState] = useState(loopsArr);

  const changeController = (event, newValue) => {
    if (loop) {
      setControlButtons(newValue);
    }
  };

  const padClick = (loop, index) => {
    setPlayList([...playList, loop]);
  };

  useEffect(() => {
    console.log(playList);
    if (playList[0]) {
      if (!loop) {
        setLoop(playList[0]);
      }
    } else {
      setControlButtons("stop");
    }
  }, [playList]);

  useEffect(() => {
    if (loop) {
      loop.src.on("end", () => {
        setLoopEnd(true);
      });
      setControlButtons("play");
      loop.src.play();
      setLoopEnd(false);
    }
  }, [loop]);

  useEffect(() => {
    if (loopEnd) {
      let newPlayList = playList.slice(1);
      setLoop();
      setPlayList(newPlayList);
    }
  }, [loopEnd]);

  useEffect(() => {
    if (controlButtons === "play") {
      loop.src.play();
    } else if (controlButtons === "pause") {
      loop.src.pause();
    } else if (controlButtons === "stop") {
      if (loop) {
        loop.src.stop();
        setLoop();
        setPlayList([]);
      }
    }
  }, [controlButtons]);

  return (
    <>
      <Header>
        <Title>
          <MainTitle>LOOP MACHINE</MainTitle>
        </Title>
      </Header>
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
