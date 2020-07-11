import React from "react";
import { Grid } from "@material-ui/core";
import Header from "../components/Header";
import CreatePet from "../components/CreatePet";
import ListPet from "../components/ListPet";

function Pet() {
  return (
    <div>
      <Header />
      <Grid item xs={12} sm={6}>
        <CreatePet />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ListPet />
      </Grid>
    </div>
  );
}

export default Pet;
