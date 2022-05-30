import React, { useState, useEffect } from 'react'
import './PatientListStyle.scss'
import { Link } from 'react-router-dom'
import { Button, Table } from 'react-bootstrap'
import { AiOutlineHome, AiOutlineFileDone, AiOutlineFileSearch, AiOutlineThunderbolt, AiOutlineSchedule, AiOutlineTeam } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { BsBagPlusFill, BsPersonLinesFill } from 'react-icons/bs'
import { FaStethoscope } from 'react-icons/fa'
import { RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import userEvent from '@testing-library/user-event'



function Createp() {

    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    console.log(data.filter(user => user.name.toLowerCase().includes("ra")));

    useEffect(() => {
        getUsers();

    }, [])

    function getUsers() {
        fetch("http://localhost:4000/patients").then((result) => {
            result.json().then((resp) => {
                setData(resp)

            })
        })
    }

    // async function search(key) {
    //     console.warn(key);

    //     let result = await fetch('http://localhost:4000/patients/:id');
    //     result = await result.json();
    //     setData(result);
    //     console.warn(result);

    // }

    return (
        <>

            <Header />
            <div className="cp">

                <Sidebar />

                <div className='patient-list'>
                    <h4>List of Patients</h4>
                    <hr />

                    <div className="btn-add">
                        <button> <Link to="/createPatient" className='link'> Create Patient</Link></button>
                    </div>

                    <div className="search-patient">
                        <input type='text' placeholder='Search here...' onChange={(e) => setQuery(e.target.value)} />

                        <input type="submit" value="Search" className='btn-searchp' />
                    </div>



                    <div>
                        <table>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile No</th>
                                <th>Doctor Name</th>
                                <th>Blood Group</th>
                                <th>Actions</th>
                            </tr>
                            <tbody>
                                {
                                    data.filter(user =>user.name.toLowerCase().includes(query)).map((user, i) =>
                                        <tr key={i}>
                                            <td>{user.id} </td>
                                            <td>{user.name} </td>
                                            <td>{user.email}</td>
                                            <td>{user.pmobileno}</td>
                                            <td>{user.doctor}</td>
                                            <td> {user.bgroup}</td>
                                            <td>
                                                <div className="btn-action">
                                                    <span><button className='btn-edit'> <Link to={"/createPatient/"+user.id} className="greenlink"><RiEdit2Line /> View</Link> </button></span> 
                                                    
                                                    {/* <span><button className='btn-delete'><RiDeleteBin5Line className='del-icon' />Delete</button></span> */}
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

export default Createp