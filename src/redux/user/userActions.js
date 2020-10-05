import axios from 'axios';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR, ADD_USER, EDIT_USER, DELETE_USER } from "./userTypes";

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}

const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

const fetchUserError = error => {
    return {
        type: FETCH_USER_ERROR,
        payload: error
    }
}

export const addUser = users => {
    return {
        type: ADD_USER,
        payload: users
    }
}

const editUser = users => {
    return {
        type: EDIT_USER,
        payload: users
    }
}
const deleteUser = id => {
    return {
        type: DELETE_USER,
        payload: id
    }
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('http://localhost:63192/api/Master/GetOrderStatus')
            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserError(errorMsg))
            })
    }
}

// export const addUser = () => {
//     return (dispatch) => {
//         axios.post('http://localhost:63192/api/Master/GetOrderStatus')
//             .then(response => {
//                 const users = response.data
//                 dispatch(addUser(users))
//             })
//             .catch(error => {
//                 const errorMsg = error.message
//             })
//     }
// }