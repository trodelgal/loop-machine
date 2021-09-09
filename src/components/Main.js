import React, { useEffect, useState, useCallback } from "react";
import { Wrapper, GridDiv, Center } from "../styles/styledComponents";
import Playlist from "./Playlist";
import Pad from "./Pad";
import {
  futureFunk,
  stutterBreakbeats,
  bassWarwick,
  electricGuitar,
  stompySlosh,
  groove1,
  groove2,
  mazePolitics,
  silentStar,
} from "../loops/Howls";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PauseIcon from "@material-ui/icons/Pause";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";
const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: 5,
  },
});

export default function Main() {
  const classes = useStyles();
  const [controlButtons, setControlButtons] = useState("stop");
  const [loop, setLoop] = useState();
  const [loopEnd, setLoopEnd] = useState(false);
  const [playList, setPlayList] = useState([]);
  const [audioState, setAudioState] = useState([
    {
      name: "futureFunk",
      src: futureFunk,
    },
    {
      name: "stutterBreakbeats",
      src: stutterBreakbeats,
    },
    {
      name: "electricGuitar",
      src: electricGuitar,
    },
    {
      name: "stompySlosh",
      src: stompySlosh,
    },
    {
      name: "groove1",
      src: groove1,
    },
    {
      name: "groove2",
      src: groove2,
    },
    {
      name: "mazePolitics",
      src: mazePolitics,
    },
    {
      name: "silentStar",
      src: silentStar,
    },
    {
      name: "bassWarwick",
      src: bassWarwick,
    },
  ]);

  const changeController = (event, newValue) => {
    if(loop){
      setControlButtons(newValue);
    }
  };

  const padClick = (loop, index) => {
    setPlayList([...playList, loop]);
  };

  useEffect(() => {
    if (playList[0]) {
      if (!loop) {
        setLoop(playList[0]);
      }
    }else{
      setControlButtons("stop")
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
        setLoop()
        setPlayList([]);
      }
    }
  }, [controlButtons]);

  return (
    <Wrapper width="1000px">
      <GridDiv repeatFormula="3fr 1fr">
        <GridDiv repeatFormula="1fr 1fr 1fr">
          {audioState.map((loop, index) => (
            <Pad key={index} loop={loop} padClick={padClick} />
          ))}
        </GridDiv>
        <Playlist playlistLoop={playList} />
      </GridDiv>
      <BottomNavigation
        value={controlButtons}
        onChange={changeController}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="STOP" value="stop" icon={<StopIcon />} />
        <BottomNavigationAction
          label="PLAY"
          value="play"
          icon={<PlayArrowIcon />}
        />
        <BottomNavigationAction
          label="PAUSE"
          value="pause"
          icon={<PauseIcon />}
        />
      </BottomNavigation>
    </Wrapper>
  );
}
