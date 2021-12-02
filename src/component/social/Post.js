import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]: {
      height: 150,
    },
  },
}));

const Post = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="../../asset/img/logo.svg"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            Title Post Here
          </Typography>
          <Typography variant="body1">
            Hey guys, i'm here to can told you that live needed more than you
            think From power and happiness, i think everyone have his style For
            communication with people you'll Found some one have a bad style
            maybe he have a angary style to told you about his opinion so just
            be save.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
