import React, { useEffect } from 'react'
import './AdminStyle.scss'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { Table } from 'react-bootstrap'
import { FaUserFriends, FaStethoscope } from 'react-icons/fa'
import { BsFillCalendar2CheckFill } from 'react-icons/bs'

function Admin() {
  return (
    <>
      <Header />
      <div className='contain' >

        <Sidebar />

        <div className="dash-container">

          <div className="text-dash">

            <h4>Welcome !!</h4>
            <h5>Admin Dashboard</h5>
          </div>

          <div className="dashcard-container">
            <div className="dashcard">
         

              <FaStethoscope className='dash-icon' />
              <h5>Doctor</h5>
            </div>
            <div className="dashcard">
              <FaUserFriends className='dash-icon' />
              <h5>Patient</h5>
            </div>
            <div className="dashcard">
              <BsFillCalendar2CheckFill className='dash-icon' />
              <h5>Appointment</h5>
            </div>


          </div>

          <div className='dashcard-container'>
            <div className="dashcard2">
              <h5>Patient Appointment</h5>
              <Table striped bordered hover size="sm" className='dashboard-table'>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Status</th>

                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Sameer</td>
                    <td>16 Apr 2022</td>
                    <td>Marketing</td>
                    <td>Pending</td>

                  </tr>
                  <tr>
                    <td>Priya</td>
                    <td> 3 May 2022</td>
                    <td>In Progress</td>
                    <td>Started</td>

                  </tr>
                  <tr>
                    <td>Ravi</td>
                    <td>2 mar 2022</td>
                    <td>Progress</td>
                    <td>Status</td>

                  </tr>
                  <tr>
                    <td>Swati</td>
                    <td>10 Dec 2022</td>
                    <td>Progress</td>
                    <td>Status</td>

                  </tr>
                  <tr>
                    <td>Sam</td>
                    <td>1 jan 2022</td>
                    <td>Progress</td>
                    <td>Status</td>

                  </tr>
                </tbody>
              </Table>
            </div>


            <div className="dashcard2">
              <h5> Appointment Report</h5>
              <Table striped bordered hover className='dashboard-table'>
                <thead>
                  <tr>
                    <th>Patient Name</th>
                    <th>Date</th>
                    <th>Subject</th>
                    <th>Status</th>

                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>Sameer</td>
                    <td>16 Apr 2022</td>
                    <td>Marketing</td>
                    <td>Pending</td>

                  </tr>
                  <tr>
                    <td>Priya</td>
                    <td> 3 May 2022</td>
                    <td>In Progress</td>
                    <td>Started</td>

                  </tr>
                  <tr>
                    <td>Ravi</td>
                    <td>2 mar 2022</td>
                    <td>Progress</td>
                    <td>Status</td>

                  </tr>
                  <tr>
                    <td>Swati</td>
                    <td>10 Dec 2022</td>
                    <td>Progress</td>
                    <td>Status</td>

                  </tr>
                  <tr>
                    <td>Sam</td>
                    <td>1 jan 2022</td>
                    <td>Progress</td>
                    <td>Status</td>

                  </tr>
                </tbody>
              </Table>
            </div>


          </div>
        </div>


      </div>

    </>

  )
}

export default Admin