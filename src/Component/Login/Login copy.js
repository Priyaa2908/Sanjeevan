import React,{useState} from 'react'
import './LoginStyle.scss'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Login() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    }

  return (
<>
<div className='login'>

<div className="login-container">
  <div className="bloc-tabs">
    <button
      className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
      onClick={() => toggleTab(1)}
    >
      Admin
    </button>

    <button
      className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
      onClick={() => toggleTab(2)}
    >
      User
    </button>
  </div>

  <div className="content-tabs">
    <div className={toggleState === 1 ? "content active-content" : "content"} >

      <form action="" className='login-form'>
        <h5> Admin Login</h5>
<hr className='hr'/>


        <div className="register-field">

          <Form.Label htmlFor="inputPassword5"> Username:</Form.Label>
          <Form.Control
            type="text" placeholder='Enter Username'
          />
        </div>

        <div className="register-field">
          <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
          <Form.Control
            type="password" placeholder='Enter Password'
          />
        </div>



        <button className='btn-login'>Sign In</button>

        <div>
          <span>New member?</span> <Link to="/register">Register here</Link>
        </div>



      </form>

    </div>

    <div className={toggleState === 2 ? "content active-content" : "content"}>
      <form action="" className='login-form'>
        <h5> User Login</h5>

        <hr  className='hr' />

        <div className="register-field">

          <Form.Label htmlFor="inputPassword5"> Username:</Form.Label>
          <Form.Control
            type="text"
          />
        </div>

        <div className="register-field">
          <Form.Label htmlFor="inputPassword5">Password:</Form.Label>
          <Form.Control
            type="password"
          />
        </div>

        <button className='btn-login'>Sign In</button>

        <div>
          <span>New member?</span> <Link>Register here</Link>
        </div>

      </form>
    </div>

  </div>


</div>

</div>


</>
  )
}

export default Login