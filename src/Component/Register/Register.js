import React, { useEffect, useState } from 'react'
import './RegisterStyle.scss'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const history = useHistory();

  async function register() {
    alert("Registration Successful!")
    let data = { username, password, confirm }
    console.warn(data);
    let result = await fetch("http://localhost:4000/user/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data)
    })
    result = await result.json();
    console.log("result", result)
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/login")
  }


  return (
    <>
      <div className="register">

        <form action="" className='register-form'>
          <h5>User Registration</h5>
          <hr />

          <div className='container-register'>

            <div className="register-field">

              <Form.Label htmlFor="inputPassword5"> Username:</Form.Label>
              <Form.Control
                type="text" placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* <div className="register-field">
      <Form.Label htmlFor="inputPassword5">Email:</Form.Label>
      <Form.Control
        type="password" placeholder='Enter Email'
      />

    </div> */}

            <div className="register-field">
              <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
              <Form.Control
                type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}
              />

            </div>

            <div className="register-field">
              <Form.Label htmlFor="inputPassword5">Confirm Password:</Form.Label>
              <Form.Control
                type="password" placeholder='Confirm Password' onChange={(e) => setConfirm(e.target.value)}
              />

            </div>


            <div >
              <label className='label-checkbox'>
                <input type="checkbox" />  I agree with the term of services
              </label>
            </div>

            <button className='btn-register' onClick={register} >Register</button>

            <div>
              <span>Already a member?</span> <Link to="/login">Login here</Link>
            </div>

          </div>

        </form>

      </div>


    </>
  )
}

export default Register