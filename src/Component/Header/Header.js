import React from 'react'
import { Navbar, Container, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './headerStyle.scss'

function Header() {
  
  return (
    <div>
      <navbar>
        <div id="logo">
         <img src="img/Saa.png" alt="" />
        </div>
        <div>
          <ul className='nav-ul'>
            {/* <li><Link to='/' className='link'>Home</Link> </li> */}
            <li><Link to='/doctor-dashboard' className='link'>Doctor Dashboard</Link> </li>
            <li><Link to='/admin-dashboard' className='link'>User Dashboard</Link> </li>
            <li><Link to='/Appointment' className='link'>Appointments</Link> </li>

          </ul>
        </div>
        <div id='login'>
        <DropdownButton id="dropdown-basic-button" title="Login">
  <Dropdown.Item><Link to="/login" className='dlink'> Login</Link> </Dropdown.Item>
  <Dropdown.Item><Link to="/register" className='dlink'> Register</Link> </Dropdown.Item>
  <Dropdown.Item><Link to="/login" className='dlink'> Logout</Link> </Dropdown.Item>
 
</DropdownButton>
          {/* <button> <Link to="/login" className='link'> Login</Link></button> */}
        </div>
      </navbar>


{/* 
      <div className='header-line'>
        <h6>Home / Dashboard</h6>
        <h4>Dashboard</h4>
      </div> */}

    </div>
  )
}

export default Header