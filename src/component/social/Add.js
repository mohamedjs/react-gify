import {
  Fab,
  Container,
  makeStyles,
  Tooltip,
  Modal,
  TextField,
  MenuItem,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Button,
  Radio,
  Snackbar,
} from "@material-ui/core";
import  MuiAlert from "@material-ui/lab/Alert";
import { PlusOne } from "@material-ui/icons";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    borderRadius: "8px",
    [theme.breakpoints.down("sm")]: {
      width: "100vh",
      height: "100vh",
    },
  },
  item: {
    marginTop: theme.spacing(2),
  },
}));

function Alert(props) {
     return <MuiAlert elevation={6} variant="filled" { ...props }/>
}

const Add = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose = (event, reason) => {
     if(reason === 'clickaway'){
          return;
     }

     setOpenAlert(false)
  }
  return (
    <div>
      <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
        <Fab color="primary" className={classes.fab}>
          <PlusOne />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form}>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                variant="standard"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="Body"
                size="small"
                multiline
                rows={4}
                defaultValue="Small Text"
                style={{ width: "100%" }}
                variant="standard"
              />
            </div>
            <div className={classes.item}>
              <TextField
                style={{ width: "100%" }}
                select
                label="visibility"
                defaultValue="public"
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="private">Private</MenuItem>
                <MenuItem value="both">Both</MenuItem>
              </TextField>
            </div>
            <div className={classes.item}>
              <FormLabel component="legend">
                Who Can See this comment?
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="EveryBody"
                  control={<Radio />}
                  label="EveryBody"
                />
                <FormControlLabel
                  value="My Children"
                  control={<Radio />}
                  label="My Children"
                />
                <FormControlLabel
                  value="No Body"
                  control={<Radio />}
                  label="No Body"
                  disabled
                />
              </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginRight: 20 }}
                onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button
                onClick={() => setOpen(false)}
                variant="outlined"
                color="secondary"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">This is success Message</Alert>
      </Snackbar>
    </div>
  );
};

export default Add;
