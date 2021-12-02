import axios from "axios"
import * as types from "./user.types"

const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users
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