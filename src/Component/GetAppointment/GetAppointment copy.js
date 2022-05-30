import React, { useState, useEffect } from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'
import './Stylegetappoint.scss'
import { RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri'

function GetAppointment() {
    const [users, setUsers] = useState([]);

    const [name, setName] = useState("");
    const [usersId, setUsersId] = useState(null);

    useEffect(() => {
        getUsers();
    }, [])

    function getUsers() {
        fetch("http://localhost:4000/patients").then((result) => {
            result.json().then((resp) => {
                setUsers(resp)
                // setName(resp[0].name)
                // setMobile(resp[0].mobile)
                // setEmail(resp[0].email)
                // setUserId(resp[0].id)

            })
        })
    }

    function deleteUser(id) {

        fetch(`http://localhost:4000/patients/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getUsers()
            })
        })
    }

    function selectUser(id) {

        let item = users[id - 1]
        console.warn("apple", item, users, id)
        setName(item.name)
        // setMobile(item.mobile)
        // setEmail(item.email)
        // setUserId(item.id)

    }

    function updateUser() {
        let item = { name }
        fetch(`http://localhost:4000/patients/${usersId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
                getUsers()
            })
        })
    }

    // ==========================================================================
    const today = () => {
        fetch("http://localhost:4000/today").then((result) => {
            result.json().then((resp) => {
                setUsers(resp)
            })
        })
    }

    const upcoming = () => {
        fetch("http://localhost:4000/upcoming").then((result) => {
            result.json().then((resp) => {
                setUsers(resp)
            })
        })
    }

    return (
        <>
            <Header />
            <div className="contain">
                <Sidebar />


                <div className='patient-list'>
                    <h4> Patient Appointment</h4>
                    <hr />
                    <div className="btn-add">
                        <button> <Link to="/Appointment" className='link'> Create Appointment</Link></button>
                    </div>

                    <div className="patient">
                        <button className='patient-btn' onClick={upcoming}>Upcoming</button>
                        <button className='patient-btn' onClick={today}>Today</button>

                    </div>

                    <div>
                        <table>
                            <tr>

                                <th>ID</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>Mobile No</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>


                            <tbody>
                                {
                                    users.map((item, i) =>
                                        <tr key={i}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.appoint_date}</td>
                                            <td>{item.pmobileno}</td>
                                            <td>{item.feedback}</td>
                                            {/* <td>{item.address}</td> */}
                                            <td>

                                                {/* <Link to={'prescription/'+ item.name}> */}
                                                {/* <Link to={`/prescription/${item.name}`}> */}
                                                {/* onClick={() => updateUser(item.id)} */}

                                                <div className="btn-action">
                                                {/* <Link to={"/prescription/" + item.name}  */}
                                                    <span>  <button className='btn-edit'>
                                                        <Link to={"/prescription/" + item.id} className="greenlink"> <RiEdit2Line /> Edit  </Link> </button> </span>

                                                    <span><button className='btn-delete' onClick={()=>deleteUser(item.id)}><RiDeleteBin5Line className='del-icon' />Delete</button></span>
                                                </div>

                                            </td>
                                        </tr>

                                    )
                                }
                            </tbody>









                        </table>
                    </div>




                </div>

            </div>


        </>
    )
}

export default GetAppointment