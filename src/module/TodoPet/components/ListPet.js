import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import {
  List,
  ListItem,
  Divider,
  Typography,
  ListSubheader,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function ListPet() {
  const classes = useStyles();
  const pet = useSelector(({ pet }) => pet);

  return (
    <List
      className={classes.root}
      subheader={<ListSubheader>Pet Names</ListSubheader>}
    >
      {pet.pets &&
        pet.pets.map((name) => (
          <>
            <ListItem alignItems="flex-start">
              <Typography>{name}</Typography>
            </ListItem>
            <Divider />
          </>
        ))}
    </List>
  );
}
