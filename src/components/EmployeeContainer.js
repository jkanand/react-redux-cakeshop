import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getEmployee, addEmployee, editEmployee, deleteEmployee } from '../redux';


function EmployeeContainer({ employeeData, getEmployee, addEmployee, editEmployee, deleteEmployee }) {

    useEffect(() => {
        getEmployee()
    }, []);

    // const [empdetails, setUserObject] = useState({
    //     id: 0,
    //     employeeName: "",
    //     employeeDepartment: ""
    // });
    const [id, setId] = useState(0);
    const [employeeName, setName] = useState('');
    const [employeeDepartment, setDepartment] = useState('');

    // const onNameChange=(e)=>{
    //     const name = e.target.value
    //     setName(name)
    // }
    // const onDepartmentChange=(e)=>{
    //     const dep = e.target.value
    //     setDepartment(dep)
    // }
    const empdata = {
        id: id,
        employeeName: employeeName,
        employeeDepartment: employeeDepartment,
    }

    // const empEditdata = {
    //     id: id, employeeName: employeeName, employeeDepartment: employeeDepartment
    // };

    const editDetails = (data) => {
        setId(data.id);
        setName(data.employeeName);
        setDepartment(data.employeeDepartment);
    }

    const submitData = empdata => {
        if (id == 0) {
            empdata.id = Math.floor(Math.random() * (999 - 100 + 1) + 100);
            addEmployee(empdata);
        }
        else{
            editEmployee(empdata);
        }
        clearData();
    }

    const clearData = () => {
        setId(0);
        setName('');
        setDepartment('');
    }


    return (
        <div>
            <div>
                <h2 className="App-title"> Employee List</h2>
                {
                    <div>
                        <p className="App-intro">
                            <div className="leftsection">
                                Employee Name : <input value={employeeName} onChange={e => setName(e.target.value)} type="text" placeholder="Employee Name" /> <br />
                                Employee Department :  <input value={employeeDepartment} onChange={e => setDepartment(e.target.value)} type="text" placeholder="Employee Department" /><br />

                                {id ? <button onClick={() => submitData(empdata)}>UPDATE</button> : <button onClick={() => submitData(empdata)}>ADD</button>} &nbsp;&nbsp;
                                <button onClick={clearData}>CLEAR</button>
                                {/* {this.state.id ? <button onClick={this.submitData}>UPDATE</button> : <button onClick={this.submitData}>ADD</button>} &nbsp;&nbsp;<button onClick={this.clearData}>CLEAR</button> */}
                            </div>

                            <div className="rightsection">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Id</th>
                                            <th>Emp Id</th>
                                            <th>User Name</th>
                                            <th>Action(s)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employeeData && employeeData.employees && employeeData.employees.map((data, index) => {
                                            return <tr key={(index + 1)}>
                                                <td>{(index + 1)}</td>
                                                <td>{data.id}</td>
                                                <td>{data.employeeName}</td>
                                                <td>{data.employeeDepartment}</td>
                                                <td><button onClick={() => editDetails(data)} >EDIT</button> <button onClick={() => deleteEmployee(data.id)}>DELETE</button> </td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        </p>
                    </div>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        employeeData: state.employee
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getEmployee: () => dispatch(getEmployee()),
        addEmployee: addEmpdata => dispatch(addEmployee(addEmpdata)),
        editEmployee: editdata => dispatch(editEmployee(editdata)),
        deleteEmployee: id => dispatch(deleteEmployee(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer)