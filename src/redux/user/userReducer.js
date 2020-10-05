import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR, ADD_USER } from './userTypes';

// const initialstate = {
//     loading: false,
//     users: [],
//     error: ''
// }

const initialstate = {
    users: [
        { id: 1, userName: "Employee 1", department: ".NET Team" },
        { id: 2, userName: "Employee 2", department: "Mobile Team" },
        { id: 3, userName: "Employee 3", department: "Design Team" }
    ]
};

const userReducer = (state = initialstate, action) => {
    switch(action.type){
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
            case FETCH_USER_SUCCESS:
                return {
                    loading: false,
                    users: action.payload,
                    error:''
                }
                case FETCH_USER_ERROR:
                    return {
                        loading: false,
                        users: [],
                        error: action.payload
                    }
                    case ADD_USER:
                        return{
                            ...state,
                            loading: false,
                            users: state.users.concat(action.payload),
                            error: ''
                        }
                    default: return state
    }
}

export default userReducer;