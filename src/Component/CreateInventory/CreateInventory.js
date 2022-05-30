import React,{useState} from 'react'
import Header from '../../Component/Header/Header'
import Sidebar from '../../Component/Sidebar/Sidebar'
import '../../Pages/Patient/StylePP.scss'

function CreateInventory() {

  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [pmobileno, setPmobileno] = useState("");
  const [smobileno, setSmobileno] = useState("");
  const [doctor, setDoctor] = useState("");
  const [gender, setGender] = useState("");
  const [bgroup, setBgroup]= useState("");
  const [adharno, setAdharno] = useState("");


  async function create() {
    let data = { name,email,dob,address,pmobileno,smobileno,doctor,gender,bgroup,adharno }
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
    <Header/>
      <div className="create-patient">
        <Sidebar />
        <div className="patientform">
          <h4>Product Details</h4>
          <hr />

          <form action="">

            <div className='fullw'>
              <label>Product Name:</label> <br />
              <input type="text" placeholder='Enter Full Name' onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className='fullw'>
              <label>Serial Number:</label> <br />
              <input type="text" placeholder='Enter Full Name' onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="halfw-l">
              <label>Qty:</label> <br />
              <input type="text" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
            </div>


            <div className="halfw-l">
              <label>In Stock:</label> <br />
              <input type="text" placeholder='Enter primary number ' onChange={(e) => setPmobileno(e.target.value)}/>
            </div>

            <div className="halfw-r">
              <label>Availibility</label> <br />
              <input type="text" placeholder='Enter secondary number' onChange={(e) => setSmobileno(e.target.value)} />
            </div>

            <div className="halfw-r">
              <label>Note:</label> <br />
              <input type="text" placeholder='Enter secondary number' onChange={(e) => setSmobileno(e.target.value)} />
            </div>

  
            <div className="textarea">
              <label>Note:</label> <br />
              <input type="textarea" placeholder='Enter address' onChange={(e) => setAddress(e.target.value)}/>
            </div>

            <div className="btn-create">
              <button onClick={create}>Create</button>
            </div>





          </form>

        </div>
      </div>
   
   
   </>
  )
}

export default CreateInventory