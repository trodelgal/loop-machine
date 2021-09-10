import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

// Component of the List of the audio in the playlist tab
export default function PinnedSubheaderList({ playlistLoop, setPlayList }) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <li>
        <ul className={classes.ul}>
          {playlistLoop.map((item, index) => (
            <ListItem key={`${index}`}>
              {index ? <PlaylistAddCheckIcon /> : <PlayCircleFilledWhiteIcon />}
              <ListItemText primary={`${item.name}`} />
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "80%",
    maxWidth: 360,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
    ul: {
      backgroundColor: "#f0e9e9",
      padding: 0,
    },
}));
