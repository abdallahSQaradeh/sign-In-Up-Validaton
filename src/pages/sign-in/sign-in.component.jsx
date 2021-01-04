import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  backgroundImage: "",
});
export default function SignIn() {
  return (
    <>
      <Grid item xs={12} sm={5}>
        this is the right item
      </Grid>
      <Grid item xs={12} sm={7}>
        this is the left item
      </Grid>
    </>
  );
}
