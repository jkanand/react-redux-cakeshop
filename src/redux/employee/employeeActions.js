import { GET_EMPLOYEE, ADD_EMPLOYEE, EDIT_EMPLOYEE, DELETE_EMPLOYEE } from "./employeeTypes";

export function getEmployee() {
    console.log('called');
    return {
        type: GET_EMPLOYEE
    }
};

export function addEmployee(data) {

    return {
        type: ADD_EMPLOYEE,
       payload: data
    }
};

export function editEmployee(data) {

    return {
        type: EDIT_EMPLOYEE,
        payload: data
    }
};

export function deleteEmployee(employeeId) {
    return {
        type: DELETE_EMPLOYEE,
        payload: employeeId
    }
};