import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Paper, Table, TableBody, TableCell, TableHead, TablePagination, TableRow } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers, deleteUser } from '../../store/user/user.action';
import { useHistory } from 'react-router-dom';

const columns = [
    { id: 'id', label: '#', minWidth: 170, align: 'center', format: value => value.toLocaleString() },
    { id: 'name', label: 'Name', minWidth: 170, align: 'center' },
    { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
    { id: 'contact', label: 'Contact', minWidth: 170, align: 'center' },
    { id: 'address', label: 'Address', minWidth: 170, align: 'center' },
    { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    tableWrapper: {
        maxHeight: 440,
        overflow: 'auto',
    },
}));

const UserTable = () => {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    let dispatch = useDispatch();
    const users = useSelector(state => state.user.users);
    const history = useHistory()
    
    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDeleteUser = (userId) => {
        dispatch(deleteUser(userId))
    }
    
    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(user => {
                            return (
                                <TableRow hover tabIndex={-1} key={user.id}>
                                    {columns.map(column => {
                                        const value = column.id !== 'action' ? user[column.id]
                                            : <ButtonGroup variant="contained" aria-label="contained primary button group">
                                                <Button color="secondary" onClick={() => { handleDeleteUser(user.id) }}>  Delete </Button>
                                                <Button color="primary" onClick={() => history.push('/user-form/'+user.id)}>  Update </Button>
                                            </ButtonGroup>;
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                backIconButtonProps={{
                    'aria-label': 'previous page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'next page',
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default UserTable
