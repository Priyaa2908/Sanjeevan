import React from 'react'
import './StyleSidebar.scss'
import { Link } from 'react-router-dom'
import { Button,Table } from 'react-bootstrap'
import { AiOutlineHome, AiOutlineFileDone, AiOutlineFileSearch, AiOutlineThunderbolt, AiOutlineSchedule, AiOutlineTeam } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { BsBagPlusFill, BsPersonLinesFill } from 'react-icons/bs'
import { FaStethoscope } from 'react-icons/fa'
import { RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri'   

function Sidebar() {
  return (
    <>
      <div className="cp-sidebar">
                    <div className='p-field'>
                        <AiOutlineHome className='p-icon' />
                        <span> Dashboard</span>
                    </div>
                    <div className='p-field'>
                        <BsPersonLinesFill className='p-icon' />
                        {/* <span> <Link to='/cases' className='link'> Cases </Link> </span> */}
                        <span>  Cases </span>
                    </div>
                    <div className='p-field'>
                        <BsBagPlusFill className='p-icon' />
                        <span> <Link to="/lable-print" className='link'>Prescription</Link> </span>
                    </div>
                    <div className='p-field'>
                        <AiOutlineFileSearch className='p-icon' />
                        <span> <Link to="/pre" className='link'>Inventory</Link> </span>
                    </div>
                    <div className='p-field'>
                        <AiOutlineSchedule className='p-icon' />
                        <span> <Link to="/get-appointment" className='link'>Appointments</Link> </span>
                    </div>
                    <div className='p-field'>
                        <FaStethoscope className='p-icon' />
                        <span> Doctors</span>
                    </div>
                    <div className='p-field'>
                        <AiOutlineTeam className='p-icon' />
                        <span> <Link to="/Patient" className='link'> Patients</Link> </span>
                    </div>
                    <div className='p-field'>

                        <AiOutlineThunderbolt className='p-icon' />
                        <span> Transactions</span>
                    </div>
                    <div className='p-field'>
                        <AiOutlineFileDone className='p-icon' />
                        <span> Report</span>
                    </div>
                </div>
    
    
    </>
  )
}

export default Sidebar