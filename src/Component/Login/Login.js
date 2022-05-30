import React, { useState } from 'react'
import './LoginStyle.scss'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    alert("Login Successful!")
    let data = { username, password}
    console.warn(data);
    let result = await fetch("http://localhost:4000/user/login", {
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
         <div className="register">

<form action="" className='register-form'>
  <h5>User Login</h5>
  <hr />

  <div className='container-register'>

    <div className="register-field">

      <Form.Label htmlFor="inputPassword5"> Username:</Form.Label>
      <Form.Control
        type="text" placeholder='Enter Username' onChange={(e) => setUsername(e.target.value)}
      />
    </div>


    <div className="register-field">
      <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
      <Form.Control
        type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}
      />

    </div>

  


    <div >
      <label className='label-checkbox'>
        <input type="checkbox" />  I agree with the term of services
      </label>
    </div>

    <button className='btn-register' onClick={login} >Login</button>

    <div>
      <span>Already a member?</span> <Link to="/login">Login here</Link>
    </div>

  </div>

</form>

</div>


    </>
  )
}

export default Login