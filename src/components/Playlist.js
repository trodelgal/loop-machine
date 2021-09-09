import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
}));

export default function PinnedSubheaderList({ playlistLoop }) {
  const classes = useStyles();

  return (
    <List className={classes.root} subheader={"playlist"}>
      <li>
        <ul>
          {playlistLoop.map((item, index) => (
            <ListItem key={`${item.name}`}>
              <ListItemText primary={`${item.name}`} />
              {index ?(<DeleteIcon />):(<PlayCircleFilledWhiteIcon/>)}
            </ListItem>
          ))}
        </ul>
      </li>
    </List>
  );
}
