import { FormControl, Button, makeStyles, Paper, TextField, ButtonGroup } from "@material-ui/core";
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import { addUserInfo, loadUsers, updateUserInfo } from "../../store/user/user.action";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(15),
  },
  form: {
    border: "1px solid #b5b5b5",
    borderRadius: "4px",
    boxShadow: "1px 1px 10px #000",
    padding: "12px",
    marginLeft: "25%",
    width: "50%"
  },
  formControl: {
    marginBottom: theme.spacing(1)
  }
}));


const UserForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const users = useSelector(state => state.user.users);
  const param = useParams()
  const dispatch = useDispatch()

  const addUser = () => {
    const id = parseInt(users[users.length - 1]['id']) + 1
    const user = {id: id, name : name, email: email, contact: contact, address: address}
    dispatch(addUserInfo(user));
    window.location = '/user'
  }

  const updateUser = () => {
    const id = param.id
    const user = {id: id, name : name, email: email, contact: contact, address: address}
    dispatch(updateUserInfo(id, user));
    window.location = '/user'
  }
  
  useEffect(() => {
    dispatch(loadUsers())
    if(param.id) {
      axios.get('http://localhost:5000/users/'+param.id)
        .then((res) => {
          var currentUser = res.data
          setName(currentUser.name)
          setEmail(currentUser.email)
          setAddress(currentUser.address)
          setContact(currentUser.contact)
        })
        .catch(err => console.log(err))
    }
  }, [])
  
  return (
    <div className={classes.root}>
      <Paper className={classes.form}>
        <FormControl className={classes.formControl} fullWidth>
          <TextField value={name} onChange={ e => setName(e.target.value) } id="filled-basic" label="Name" variant="filled" />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <TextField value={contact} onChange={ e => setContact(e.target.value) }id="filled-basic" label="Contact" variant="filled" />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <TextField value={address} onChange={ e => setAddress(e.target.value) }  id="filled-basic" label="Address" variant="filled" />
        </FormControl>
        <FormControl className={classes.formControl} fullWidth>
          <TextField value={email} onChange={ e => setEmail(e.target.value) }id="filled-basic" label="ُEmail" variant="filled" />
        </FormControl>
        <ButtonGroup align="left" variant="contained" aria-label="contained primary button group">
          { !param.id ? <Button color="primary" align="center" onClick={() => addUser() }>  Add </Button> 
                     : <Button color="primary" align="center" onClick={() => updateUser() }>  Update </Button>}
        </ButtonGroup>
      </Paper>
    </div>
  );
};

export default UserForm;
