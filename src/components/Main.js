import React, { useEffect, useState, useCallback } from "react";
import { Wrapper, GridDiv, Center } from "../styles/styledComponents";
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
import { Howl, Howler } from "howler";
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
  const [playQueue, setPlayQueue] = useState([]);
  const [audioState, setAudioState] = useState([
    {
      name: "futureFunk",
      src: futureFunk,
      isOn: false,
    },
    {
      name: "stutterBreakbeats",
      src: stutterBreakbeats,
      isOn: false,
    },
    {
      name: "electricGuitar",
      src: electricGuitar,
      isOn: false,
    },
    {
      name: "stompySlosh",
      src: stompySlosh,
      isOn: false,
    },
    {
      name: "groove1",
      src: groove1,
      isOn: false,
    },
    {
      name: "groove2",
      src: groove2,
      isOn: false,
    },
    {
      name: "mazePolitics",
      src: mazePolitics,
      isOn: false,
    },
    {
      name: "silentStar",
      src: silentStar,
      isOn: false,
    },
    {
      name: "bassWarwick",
      src: bassWarwick,
      isOn: false,
    },
  ]);

  const changeController = (event, newValue) => {
    setControlButtons(newValue);
  };

  useEffect(() => {
    if (controlButtons === "play") {
      electricGuitar.play();
    } else if (controlButtons === "pause") {
      electricGuitar.pause();
    } else if (controlButtons === "stop") {
      electricGuitar.stop();
      setPlayQueue([]);
    }
  }, [controlButtons]);

  const padClick = (loop,index) => {
    if(playQueue[0]){
        setPlayQueue([...playQueue,loop]);
        // setAudioState(()=>{
        //   audioState[index].isOn = true;
        // })
    }
    else{
        setPlayQueue([...playQueue,loop]);
        loop.src.play()
    }
  };

  useEffect(() => {
      console.log(playQueue)
  }, [playQueue]);
  return (
    <Wrapper width="1000px">
      <GridDiv repeatFormula="1fr 1fr 1fr">
        {audioState.map((loop, index) => (
          <Pad key={index} loop={loop} padClick={padClick} />
        ))}
        ;
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
