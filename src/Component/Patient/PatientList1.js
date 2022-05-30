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

    const [value, setValue] = useState('');
    const [datasource, setDatasource] = useState(data);
    const [tableFilter, setTableFilter] = useState([]);

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

    const filterData = (e) => {
        if (e.target.value != "") {
            setValue(e.target.value);
            const filterTable = datasource.filter(o => Object.keys(o).some(k => String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));

            setTableFilter([...filterTable]);

        }
        else {
            setValue(e.target.value);
            setDatasource([...datasource]);
        }
    }











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
                        <input type='text' placeholder='Search here...' value={value} onChange={filterData} />
                        <input type="submit" value="Search" className='btn-searchp' />
                    </div>



                    <div>
                        <table>
                            <tr>
                                {/* <th>ID</th> */}
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile No</th>
                                <th>Doctor Name</th>
                                <th>Blood Group</th>
                                <th>Actions</th>
                            </tr>
                            <tbody>
                                {
                                    value.length > 0 ? tableFilter.map((user)=> {
                                        return (
                                            <tr>
                                                {/* <td>{user._id} </td> */}
                                                <td>{user.name} </td>
                                                <td>{user.email}</td>
                                                <td>{user.p_mobileno}</td>
                                                <td>{user.doctor}</td>
                                                <td> {user.b_group}</td>

                                                <td>
                                                    <div className="btn-action">
                                                        <span><button className='btn-edit'><RiEdit2Line /> Edit</button></span> <span><button className='btn-delete'><RiDeleteBin5Line className='del-icon' />Delete</button></span>
                                                    </div>

                                                </td>
                                            </tr>

                                        )

                                    }): datasource.map((user)=> {
                                            return (
                                                <tr>
                                                    {/* <td>{user._id} </td> */}
                                                    <td>{user.name} </td>
                                                    <td>{user.email}</td>
                                                    <td>{user.p_mobileno}</td>
                                                    <td>{user.doctor}</td>
                                                    <td> {user.b_group}</td>

                                                    <td>
                                                        <div className="btn-action">
                                                            <span><button className='btn-edit'><RiEdit2Line /> Edit</button></span> <span><button className='btn-delete'><RiDeleteBin5Line className='del-icon' />Delete</button></span>
                                                        </div>

                                                    </td>
                                                </tr>
                                            )

                                        })
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