import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import Prescription from './Prescription.scss'
import Header from '../Header/Header'
import { Link, useParams } from 'react-router-dom'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'
import { IoMdSend } from 'react-icons/io'
import $ from 'jquery';
import History from './History'

function Priscription() {
  const [datap, setDatap] = useState([]);

  const params = useParams();


  useEffect(() => {
    getProductDetail();
  }, []);

  const getProductDetail = async () => {
    // console.warn(params);
    let result = await fetch(`http://localhost:4000/patients/profile/${params.id}`);
    result = await result.json();
    // console.warn(result);
    setDatap(result);
// ==========================================================

$(document).ready(function(){
  
  $("#printbtn").click(function(){
    $(".t1").hide();
  //   ("slow",function(){
  // window.print();
  //   })
  });




});



  }

  // useEffect(()=>{

  
  //     $("#printbtn").click(function(){
  //       $(".t1").hide("fast",function(){
  //     window.print();
  //       })
  //     });
  

  
  
  // },[])

 

  // console.warn(data);

  // ===========================================================================
  async function Submit() {

    let result = await fetch(`http://localhost:4000/patients/prescription/${params.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      // body: JSON.stringify(data)
      body: JSON.stringify(users)
    })
    result = await result.json();
    console.warn("result", result)

  }


  // ================================================================
  const userTemplate = { medicine: "", dose: "", duration: "" };
  const [users, setUsers] = useState([userTemplate]);

  const addUser = () => {
    setUsers([...users, userTemplate]);
  };

  const onChange = (e, index) => {
    const updatedUsers = users.map((user, i) => index == i
      ? Object.assign(user, { [e.target.name]: e.target.value })
      : user);
    setUsers(updatedUsers);
  };

  const removeUser = (index) => {
    const filteruser = [...users];
    filteruser.splice(index, 1);
    setUsers(filteruser);
  }
  // =====================================================================

  const[docnote, setDocnote] = useState("");
  const[note, setNote]= useState("");
  
  let notedata = {docnote,note};
  console.warn(notedata);


  async function noteadd() {

    let result = await fetch(`http://localhost:4000/patients/prescription/${params.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
  
      body: JSON.stringify(notedata)
    })
    result = await result.json();
    console.warn("result", result)
  }

  function formhandler(e){
    e.preventDefault();
  }

  function handler(){
    Submit()
    noteadd()
    formhandler()
  }
// ============================================================================

const [show,setShow]=useState(false);


  return (
    <>
 
      <form action="" className='patientprofile-form' onSubmit={formhandler}>


        <h4>Patient Profile</h4>
        <div className="patient-details">
          <p><strong>Patient Id: </strong>{params.id} </p>
          <p><strong>Name: </strong>{datap.name} </p>
          <p><strong>Contact: </strong> {datap.pmobileno}</p>
        </div>

        <hr />
        


        <div className="appointment">
          <h5>Prescription</h5>

          <div className="appointment-container">

            {
              users.map((user, index) => (

                <div className="appointment-field" key={index} >

                  <div>
                    <input type="text" placeholder='Medicine' name="medicine" value={user.medicine} onChange={(e) => onChange(e, index)} />
                  </div>

                  <div>
                    <input type="text" placeholder='Dose' name="dose" value={user.dose} onChange={(e) => onChange(e, index)} />
                  </div>

                  <div>
                    <input type="text" placeholder='Duration' name="duration" value={user.duration} onChange={(e) => onChange(e, index)} />
                  </div>

                  <span onClick={addUser}><FaPlusCircle className='addi t1' /> </span>

                  <span onClick={() => removeUser(index)} ><FaMinusCircle className='addi t1' /> </span>

                </div>

              ))
            }

          </div>


          <div className="note-container">
            <div className='note'>
              <label className='label-note'>
                Doctor's Note:
              </label>
              {/* <input type="textarea" placeholder='Add note here...' name="docnote" onChange={(e) => setDocnote(e.target.value)} /> */}

             <textarea  placeholder='Add note here...' name="docnote" id="" cols="100" rows="3" onChange={(e) => setDocnote(e.target.value)}>
              </textarea>
            </div>

            <div className='note t1'>
              <label className='label-note'>
               Internal Note:
              </label>
              {/* <input type="text" placeholder='Add note here...' name='name="note"' onChange={(e) => setNote(e.target.value)} /> */}
              <textarea placeholder='Add note here...' name="note" id="" cols="100" rows="3" onChange={(e) => setNote(e.target.value)}></textarea>
            </div>

          </div>



        </div>


        <hr />

        <button className='btn-submit t1' onClick={handler}>Submit</button>

        <button className='btn-submit t1' id='printbtn' onClick={()=>window.print()}>Print-Page</button>

        <button className='btn-submit t1'> <Link to={'/lable-print/' + params.id} className='link'> Label-Print </Link> </button>

      </form>

      <div className='history'>

      <button className='btn-history' onClick={()=>setShow(!show)}>
        {show === true ? "Hide":"View History"}
        
        </button>

      { show &&  <> 
       <History/>
          </>
        }
      

     
      </div>

    </>
  )
}

export default Priscription