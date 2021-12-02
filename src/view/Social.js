import { Grid } from "@material-ui/core";
import React from "react";
import Feed from "../component/social/Feed";
import Leftbar from "../component/social/Leftbar";
import Navbar from "../component/social/Navbar";
import Rightbar from "../component/social/Rightbar";

const Social = () => {
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item xs={2}>
          <Rightbar />
        </Grid>
        <Grid item xs={7}>
          <Feed />
        </Grid>
        <Grid item xs={3}>
          <Leftbar />
        </Grid>
      </Grid>
    </div>
  );
};

export default Social;
