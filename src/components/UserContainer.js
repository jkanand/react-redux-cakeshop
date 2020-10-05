import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, addUser } from '../redux';



function UserContainer({ userData, fetchUsers, addUser }) {
    useEffect(() => {
        fetchUsers()
    }, []);


    const [users, setUserObject] = useState({
        OrderStatusId: 0,
        OrderStatus: ""
    });


   // alert(users.OrderStatus);
    //const [id, setId] = useState(5);

    const clearData = () => {
        this.setState({
            OrderStatusId: 0,
            OrderStatus: "",
        });
    }

    return userData.loading ? (
        <h2>Loading..</h2>
    ) : userData.error ? (
        <h2> { userData.error}</h2>
    ) : (
                <div>
                    <h2 className="App-title"> User List</h2>
                    {/* <div>
                        {userData &&
                            userData.users &&
                            userData.users.map(user => <p>
                                <strong>Name</strong>: {user.name} |
                        <strong> Zip Code</strong> : {user.address.zipcode} |
                        <strong> Company Name</strong>: {user.company.name} </p>)}
                    </div> */}
                    {
                        <div >
                            <p className="App-intro">
                                <div className="leftsection">
                                Id : <input type='text' value={users.OrderStatusId} onChange={e => setUserObject(e.target.value)} placeholder="Id" /><br />
                                    User Name : <input type='text' value={users.OrderStatus} onChange={e => setUserObject(e.target.value)} placeholder="Order Status" /><br />
                                    {/* Department : <input type='text' value={users.department} onChange={e => setUserObject(e.target.value)} placeholder="Department" /><br /> */}
                                    <button onClick={addUser}>ADD</button> &nbsp;&nbsp;<button onClick={clearData}>CLEAR</button>
                                </div>

                                <div className="rightsection">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>User Id</th>
                                                <th>User Name</th>
                                                <th>Action(s)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {userData && userData.users && userData.users.map((data, index) => {
                                                return <tr key={(index + 1)}>
                                                    <td>{(index + 1)}</td>
                                                    <td>{data.OrderStatusId}</td>
                                                    <td>{data.OrderStatus}</td>
                                                    <td><button onClick={() => this.editUser(data)}>EDIT</button> <button onClick={() => this.deleteUser(data.OrderStatusId)}>DELETE</button> </td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>

                            </p>
                        </div>
                    }
                </div>
            )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapdispatchToProps = dispatch => {
    // return {
    //     fetchUsers: () => dispatch(fetchUsers())
    // }
    return {
        fetchUsers: () => dispatch(fetchUsers()),
        addUser: users => dispatch(addUser(users)),
        // editUser: () => dispatch(editUser()),
        // deleteUser: () => dispatch(deleteUser())
    }
}

export default connect(mapStateToProps, mapdispatchToProps)(UserContainer);