import axios from "axios"
import * as types from "./user.types"

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
})

const deleteUserbyId = (userId) => ({
    type: types.DELETE_USER,
    payload: userId
})
const addUser = (user) => ({
    type: types.ADD_USER,
    payload: user
})

export const loadUsers = () => {
    return (dispatch) => {
        axios.get("http://localhost:5000/users")
        .then((res) => {
            dispatch(getUsers(res.data))
        })
        .catch((err) => {
            console.log(err);
        })
    };
}

export const deleteUser = (userId) => {
    return (dispatch) => {
        axios.delete("http://localhost:5000/users/"+userId)
        .then((res) => {
            dispatch(deleteUserbyId(userId))
        })
        .catch((err) => {
            console.log(err);
        })
    };
}

export const addUserInfo = (user) => {
    return (dispatch) => {
        axios.post('http://localhost:5000/users/', user)
            .then( res => dispatch(addUser(user)) )
            .catch(err => console.log(err))
    };
}