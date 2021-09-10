import React, { useEffect, useState } from "react";
import { Wrapper, GridDiv } from "../styles/styledComponents";
import Pad from "./Pad";
import { loopsArr } from "../loops/Howls";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import StopIcon from "@material-ui/icons/Stop";

// this is the component of main looper tab - 
// turn on and if the pad by clicking
export default function QueueMachine() {
  const classes = useStyles();
  const [controller, setController] = useState();
  const [loopEnd, setLoopEnd] = useState(false);
  const [playingNow, setPlayingNow] = useState([]);
  const [audioState, setAudioState] = useState(loopsArr);
  const [nextLoop, setNextLoop] = useState([]);

  // Audio controller (PLAY/STOP)
  const changeController = (event, newValue) => {
    if (newValue === "play") {
      if (nextLoop[0]) {
        setController(newValue);
      }
    } else {
      setController(newValue);
    }
  };

  useEffect(() => {
    if (controller === "play") {
      if (nextLoop[0]) {
        nextLoop[0].on("end", () => {
          setLoopEnd(true);
        });
        nextLoop.forEach((howl) => {
          howl.play();
        });
        setPlayingNow(nextLoop);
      }
    }
    if (controller === "stop") {
      if (playingNow[0]) {
        playingNow.forEach((howl) => {
          howl.stop();
        });
      }
    }
  }, [controller]);

  // pad click function - change pad state(on/of)
  const padClick = (loop, index) => {
    let newAudioState = audioState.slice();
    console.log(index);
    newAudioState[index].state = !audioState[index].state;
    setAudioState(newAudioState);
  };

  // Update the next loop affter clicking pad
  useEffect(() => {
    const newNextLoop = audioState
      .filter((pad) => {
        return pad.state;
      })
      .map((audio) => audio.src);
    setNextLoop(newNextLoop);
  }, [audioState]);

  // Loop continuity - start the next loop on end of the loop 
  useEffect(() => {
    if (loopEnd) {
      console.log("end");
      if (nextLoop[0]) {
        console.log("next");
        nextLoop[0].on("end", () => {
          setLoopEnd(true);
        });
        nextLoop.forEach((howl) => {
          howl.play();
          setLoopEnd(false);
        });
      } else {
        setController("stop");
      }
    }
  }, [loopEnd]);

  return (
    <>
      <Wrapper>
        <GridDiv repeatFormula="1fr 1fr 1fr">
          {audioState.map((loop, index) => (
            <Pad key={index} index={index} loop={loop} padClick={padClick} />
          ))}
        </GridDiv>
        <BottomNavigation
          value={controller}
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
        </BottomNavigation>
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