import { Button, ButtonGroup, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import React from 'react'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        textAlign: "center",
        marginBottom: theme.spacing(2)
    },
}));

const AddButton = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <div className={classes.root}>
            <ButtonGroup align="center" variant="contained" aria-label="contained primary button group">
                <Button color="primary" align="center" onClick={() => { history.push('/user-form')}}>  Add User </Button>
            </ButtonGroup>
        </div>
    )
}

export default AddButton
