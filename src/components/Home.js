import React, { useEffect, useState, useCallback } from "react";
import { Wrapper, GridDiv, Center } from "../styles/styledComponents";
import Pad from "./Pad";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import PauseIcon from '@material-ui/icons/Pause';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
const useStyles = makeStyles({
  root: {
    width: "50%",
    margin: 5
  },
});

export default function Home() {
  const classes = useStyles();
  const [controlButtons, setControlButtons] = useState("stop");
  const handleChange = (event, newValue) => {
    setControlButtons(newValue);
  };

  return (
    <Wrapper width="1000px">
      <GridDiv repeatFormula="1fr 1fr 1fr">
        <Pad color="red" />
        <Pad color="black" />
        <Pad color="blue" />
        <Pad color="yellow" />
        <Pad color="green" />
        <Pad color="brown" />
        <Pad color="pink" />
        <Pad color="orange" />
        <Pad color="grey" />
      </GridDiv>
      <BottomNavigation
        value={controlButtons}
        onChange={handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="STOP"  value="stop" icon={<StopIcon />} />
        <BottomNavigationAction label="PLAY"  value="play" icon={<PlayArrowIcon />} />
        <BottomNavigationAction label="PAUSE"  value="pause" icon={<PauseIcon/>} />
      </BottomNavigation>
    </Wrapper>
  );
}
