import { makeStyles } from '@material-ui/core';
import React from 'react'
import AddButton from '../../component/user/AddButton';
import UserTable from "../../component/user/UserTable"

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(15),
    },
}));

const index = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <AddButton />
            <UserTable />
        </div>
    )
}

export default index
