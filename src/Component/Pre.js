import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import { Link } from 'react-router-dom'
import '../Component/GetAppointment/Stylegetappoint.scss'
import { RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri'
import Sidebar from '../Component/Sidebar/Sidebar'
import {BiSearchAlt} from 'react-icons/bi'

function Pre() {
    const [users, setUsers] = useState([]);
    const [query, setQuery] = useState("");

    console.log(users.filter(user => user.name.toLowerCase().includes("ra")));




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

    return (
        <>
            <Header />
            <div className="contain">
            <Sidebar />

                <div className='patient-list'>
                    <h4>Medicine Inventory</h4>
                    <hr />
                    

                    <div className="btn-add">
                        <button> <Link to="/CreateInventory" className='link'> Create Product</Link></button>
                    </div>


                    <div className='search-container'>
                   
                      <div>
                      <BiSearchAlt className='searchicon'/>
                        <input type="text" className='input' placeholder='Search Product Here ...' onChange={(e) => setQuery(e.target.value)} />
                       
                      </div>
                      
    
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
                                    users.filter(user => user.name.toLowerCase().includes(query)).map((item, i) =>
                                        <tr key={i}>
                                            <td>{item._id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.appoint_date}</td>
                                            <td>{item.p_mobileno}</td>
                                            <td>{item.feedback}</td>
                                            {/* <td>{item.address}</td> */}
                                            <td>

                                                {/* <Link to={'prescription/'+ item.name}> */}
                                                {/* <Link to={`/prescription/${item.name}`}> */}
                                                {/* onClick={() => updateUser(item.id)} */}

                                                <div className="btn-action">
                                                    <span>  <button className='btn-edit'>
                                                        <Link to={"/prescription/" + item.name} > <RiEdit2Line /> Edit  </Link> </button> </span>

                                                    <span><button className='btn-delete' ><RiDeleteBin5Line className='del-icon' />Delete</button></span>
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

export default Pre