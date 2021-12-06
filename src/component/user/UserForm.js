import { makeStyles } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(15),
    },
}));

const UserForm = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>

        </div>
    )
}

export default UserForm
