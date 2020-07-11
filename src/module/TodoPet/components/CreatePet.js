import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  TextField,
  CardActions,
  Button,
} from "@material-ui/core";

import * as actions from "../store/actionCreator";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

function CreatePet() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [petName, setPetName] = useState("");

  const handleChange = (event) => {
    setPetName(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(actions.createPet(petName));
    setPetName("");
  };

  return (
    <Card className={classes.root}>
      <CardHeader title="Create Pet" />
      <CardContent>
        <TextField
          label="Enter Pet Name"
          variant="outlined"
          name="pet"
          onChange={handleChange}
          value={petName}
        />
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Store Pet Name
        </Button>
      </CardActions>
    </Card>
  );
}

export default CreatePet;
