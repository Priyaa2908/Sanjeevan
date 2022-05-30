import React, { useState, useEffect } from 'react'
import { Card, ListGroup, ListGroupItem, Table,Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './StyleCarddoc.scss'
function Carddoc() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/appointments").then((result) => {
      result.json().then((resp) => {
        setUser(resp)
      })
    })
  }, [])


const today=()=>{
  fetch("http://localhost:4000/today").then((result) => {
    result.json().then((resp) => {
      setUser(resp)
    })
  })
}

const upcoming=()=>{
  fetch("http://localhost:4000/upcoming").then((result) => {
    result.json().then((resp) => {
      setUser(resp)
    })
  })
}



  return (
    <div className='container-main'>

      <div className='card-container'>
        <Card style={{ width: '18rem' }}>
          <img className="top doc-img" src="img/doc1.webp" alt="img" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>

          </Card.Body>
          <ListGroup className="list-group-flush">
       
            <ListGroupItem> <Link to="/">Appointments</Link>  </ListGroupItem>
            <ListGroupItem> <Link to="/PatientProfile"> Prescription Details </Link>  </ListGroupItem>
            <ListGroupItem> <Link to="/Prescription"> Patients Profile </Link> </ListGroupItem>
            <ListGroupItem> <Link to="/label">Label</Link> </ListGroupItem>
            <ListGroupItem> <Link to="/Patient">Patient</Link></ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>


      <div className="Container">
        <div className='sub-container'>
          <div className='container1'>
            <div className='container-img'>
              <img src="img/con3.webp" />
            </div>

            <div className='heading'>
              <h6>Total Patients</h6>
              <h6> <strong>1500</strong> </h6>
              <h6>Till today</h6>
            </div>
          </div>
          <div className='container1'>
            <div className='container-img'>
              <img src="img/con2.webp" />
            </div>

            <div className='heading'>
              <h6>Total Patients</h6>
              <h6> <strong>1500</strong> </h6>
              <h6>Till today</h6>
            </div>
          </div>
          <div className='container1'>
            <div className='container-img'>
              <img src="img/con1.webp" />
            </div>

            <div className='heading'>
              <h6>Total Patients</h6>
              <h6 className='str'> <strong>1500</strong> </h6>
              <h6>Till today</h6>
            </div>
          </div>
        </div>

        <div className='patient-list'>
          <div className="patient-heading">
            <h5>Patient Appoinment</h5>
          </div>

          <div className="patient">
            <button className='patient-btn' onClick={upcoming}>Upcoming</button>
            <button className='patient-btn' onClick={today}>Today</button>

          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Patient Name</th>
                <th>Appointment</th>
                <th>Contact</th>
                <th>Address</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((item, i) =>
                  <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.contact}</td>
                    <td>{item.address}</td>
                    <td><Button className='accept'>Accept</Button> <Button>Decline</Button> </td>
                  </tr>

                )
              }




            </tbody>
          </Table>

        </div>


      </div>

    </div>
  )
}

export default Carddoc;