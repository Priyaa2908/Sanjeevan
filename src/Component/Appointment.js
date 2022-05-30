import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Header from './Header/Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'

function Appointment() {
    const[openModal, setOpenModal] = useState(false);


    const [name, setName] = useState("");
    const [appoint_date, setAppoint_date] = useState("");
    const [pmobileno, setPmobileno] = useState("");
    // const [address, setAddress] = useState("");
    const [feedback, setFeedback] = useState("");

    // const history = useHistory();

    async function signUp() {
        alert("Appointment Submitted Successfully!")
        let data = { name, appoint_date, pmobileno, feedback }
        console.warn(data);
        let result = await fetch("http://localhost:4000/patients", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
        result = await result.json();
        console.warn("result", result)
        // localStorage.setItem("user-info", JSON.stringify(result));
        // history.push("/add")
    }


    return (
        <>
            <Header />
            <div className='appoint-register'>


                <div className="form">
                    <form action="">
                        <h4>Patient Appointment</h4>
                        <div >
                            <input type="text" placeholder='Enter patient name' onChange={(e) => setName(e.target.value)} className='field' />
                        </div>


                        <div>
                            <input type="datetime-local" onChange={(e) => setAppoint_date(e.target.value)} className='field' />
                        </div>

                        <div>
                            <input type="number" onChange={(e) => setPmobileno(e.target.value)} placeholder='Enter contact number' className='field' />
                        </div>
                        {/* 
                        <div>
                            <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder='Enter address' className='field' />
                        </div> */}

                        <div >
                            <input type="textarea" placeholder='Description..' onChange={(e) => setFeedback(e.target.value)} className='fieldarea' />
                        </div>

                        {/* <div>
                            Existing Patient ? <Link to="/Patient">Click here </Link>
                        </div> */}

                        <Button onClick={signUp} className='app-btn'>Submit</Button>

                    </form>
                </div>

                <div className="appt">
                    <img src="img/hosp.jpg" alt="" />
                </div>

            </div >

            

        </>
    )
}

export default Appointment