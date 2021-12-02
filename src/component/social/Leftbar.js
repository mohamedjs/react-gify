import React from "react";
import { makeStyles, Container, Typography, Avatar } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555"
  }
}));
const Leftbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>Online friends</Typography>
      <AvatarGroup max={4}>
        <Avatar alt="Romy Noor" src="../../asset/images/logo.svg"></Avatar>
        <Avatar alt="Romy Noor" src="../../asset/images/logo.svg"></Avatar>
        <Avatar alt="Romy Noor" src="../../asset/images/logo.svg"></Avatar>
        <Avatar alt="Romy Noor" src="../../asset/images/logo.svg"></Avatar>
        <Avatar alt="Romy Noor" src="../../asset/images/logo.svg"></Avatar>
      </AvatarGroup>
      <Typography gutterBottom className={classes.title}>Gallery</Typography>
    </Container>
  );
};

export default Leftbar;
