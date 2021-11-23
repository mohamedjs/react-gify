import React from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import {
  Bookmark,
  Camera,
  CardGiftcard,
  ExitToApp,
  Home,
  List,
  Notifications,
  Person,
  Settings,
  TabletMac,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    color: "#fff",
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#fff",
      color: "#555",
      border: "1px solid #eee",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  text: {
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    fontSize: "24px",
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(1),
      fontSize: "20px",
    },
  },
}));
const Rightbar = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}> Home Page </Typography>
      </div>
      <div className={classes.item}>
        <Person className={classes.icon} />
        <Typography className={classes.text}> People </Typography>
      </div>
      <div className={classes.item}>
        <Camera className={classes.icon} />
        <Typography className={classes.text}> Camera </Typography>
      </div>
      <div className={classes.item}>
        <Notifications className={classes.icon} />
        <Typography className={classes.text}> Notes </Typography>
      </div>
      <div className={classes.item}>
        <List className={classes.icon} />
        <Typography className={classes.text}> List Items </Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}> Settings </Typography>
      </div>
      <div className={classes.item}>
        <TabletMac className={classes.icon} />
        <Typography className={classes.text}> Apps </Typography>
      </div>
      <div className={classes.item}>
        <CardGiftcard className={classes.icon} />
        <Typography className={classes.text}> Happiness </Typography>
      </div>
      <div className={classes.item}>
        <Bookmark className={classes.icon} />
        <Typography className={classes.text}> Collection </Typography>
      </div>
      <div className={classes.item}>
        <ExitToApp className={classes.icon} />
        <Typography className={classes.text}> Get Out </Typography>
      </div>
    </Container>
  );
};

export default Rightbar;
