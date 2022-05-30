import React, { useEffect, useState } from 'react'
import Header from '../../Component/Header/Header'
import Sidebar from '../../Component/Sidebar/Sidebar'
import { useParams } from 'react-router-dom'
import './StylePP.scss'


function PatientPage() {

  const [data, setData] = useState([]);

  const params = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [pmobileno, setPmobileno] = useState("");
  const [smobileno, setSmobileno] = useState("");
  const [doctor, setDoctor] = useState("");
  // const [gender, setGender] = useState("");
  const [bgroup, setBgroup] = useState("");
  const [adharno, setAdharno] = useState("");

  useEffect(() => {
    getPatient();
  }, [])

  function formHandler(e) {
    alert("Patient created Successfully")
    e.preventDefault();
  }



  async function getPatient() {
    console.warn(params);
    let data = { name, email, dob, address, pmobileno, smobileno, doctor, bgroup, adharno }
    console.warn(data);
    let result = await fetch(`http://localhost:4000/patients/${params.id}`);
    result = await result.json();
    setData(result);
    setName(result.name)
    setEmail(result.email)
    setDob(result.dob)
    setAddress(result.address)
    setPmobileno(result.pmobileno)
    setSmobileno(result.smobileno)
    setDoctor(result.doctor)
    setBgroup(result.bgroup)
    setAdharno(result.adharno)
  

    console.warn(result);
  }


  async function Submit() {
    let data = { name, email, dob, address, pmobileno, smobileno, doctor, bgroup, adharno }
        console.warn(data);
    let result = await fetch(`http://localhost:4000/patients/${params.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      // body: JSON.stringify(data)
      body: JSON.stringify(data)
    })
    result = await result.json();
    console.warn("result", result)
    setData(result);
    setName(result.name)
    setEmail(result.email)
    setDob(result.dob)
    setAddress(result.address)
    setSmobileno(result.smobileno)
    setPmobileno(result.pmobileno)
    setDoctor(result.doctor)
    setBgroup(result.bgroup)
    setAdharno(result.adharno)
  }


  return (
    <>
      
      <div className="create-patient">
        <Sidebar />
        <div className="patientform">
          <h4>Patient Details</h4>
          <hr />

          <form onSubmit={formHandler} action="">

            <div className='fullw'>
              <label>Full Name:</label> <br />
              <input type="text" placeholder='Enter Full Name' defaultValue={name} onChange={(e) => setName(e.target.value)} />
            </div>


            <div className="halfw-l">
              <label>Email:</label> <br />
              <input type="text" placeholder='Enter Email' defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div className="halfw-r">
              <label>Date of Birth:</label> <br />
              <input type="Date" placeholder='Enter Full Name' defaultValue={dob} onChange={(e) => setDob(e.target.value)} />
            </div>

            <div className="halfw-l">
              <label>Primary Mobile No:</label> <br />
              <input type="text" placeholder='Enter Full Name' defaultValue={pmobileno} onChange={(e) => setPmobileno(e.target.value)} />
            </div>

            <div className="halfw-r">
              <label>Secondary Mobile No:</label> <br />
              <input type="text" placeholder='Enter secondary number' defaultValue={smobileno}  onChange={(e) => setSmobileno(e.target.value)} />
            </div>

            <div className="halfw-l">
              <label>Doctor:</label> <br />
              <input type="text" placeholder='Enter doctor Name' defaultValue={doctor} onChange={(e) => setDoctor(e.target.value)} />
            </div>

            {/* <div className='radio-option' >
              <span>Gender:  </span>
              <span className='radio'>
                <input type="radio" name='gender' onChange={(e) => setGender(e.target.value)} /> male
                <input type="radio" name='gender' onChange={(e) => setGender(e.target.value)} /> female
                <input type="radio" name='gender' onChange={(e) => setDoctor(e.target.value)} /> other
              </span>
            </div> */}

            <div className="halfw-l">
              <label>Blood Group:</label> <br />
              <input type="text" placeholder='Enter blood group' defaultValue={bgroup} onChange={(e) => setBgroup(e.target.value)} />
            </div>

            <div className="halfw-r">
              <label>Aadhar No:</label> <br />
              <input type="text" placeholder='Enter aadhar number' defaultValue={adharno}  onChange={(e) => setAdharno(e.target.value)} />
            </div>


            <div className="textarea">
              <label>Address:</label> <br />
              <input type="textarea" placeholder='Enter address' defaultValue={address} onChange={(e) => setAddress(e.target.value)} />
            </div>

            <div className="btn-create">
              <button type='submit' onClick={Submit}>Submit</button>
            </div>

          </form>

        </div>
      </div>


    </>

  )
}

export default PatientPage