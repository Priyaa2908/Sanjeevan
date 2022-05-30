import React, { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'

function Cases() {
    const params = useParams();

  const [data, setData] = useState([]);
  // console.log(data);



  useEffect(() => {
    getuser();
  }, [])


  async function getuser() {
 console.warn(params);
    let result = await fetch(`http://localhost:4000/patients/history/${params.id}`)
    result = await result.json();
    setData(result);
  }
  // Object.values(data.address).map(user=>console.log(user));

  return (

    <>
    
      <div className='history-container'>

        {
          data.map((user) =>

            <div>
              <div className='text-history'>
                <p> <strong> Name :</strong> {user.name} </p>
                <p> <strong>Receptionist's Note : </strong> {user.feedback} </p>
                <p>
                  {
                    user.appoint_date.map((date) =>
                      <p><strong>Appointment Date : </strong>{date}</p>
                    )
                  }

                </p>
                <p>
                  {
                    user.note.map((item) =>
                      <>
                        <p> <strong>Doctor's Note  : </strong> {item.note}</p>
                        <p> <strong>Internal Note  :</strong>  {item.docnote}</p>
                      </>

                    )
                  }
                </p>
              </div>


              <table className='table-history'>
                <tr>
                  <th>Medicine</th>
                  <th>Dose</th>
                  <th>Duration</th>
                </tr>
                <tbody>
                  {user.prescription.map((sub, i) =>
                    <tr key={i}>
                      <td>{sub.medicine}</td>
                      <td>{sub.dose}</td>
                      <td>{sub.duration}</td>

                    </tr>

                  )}
                </tbody>

              </table>

            </div>


            // <h6>{
            //   user.appoint_date.map((users)=>
            //   <h6>{users[0]}</h6>
            //   )
            //   }</h6>

          )
        }


        {/* Object.values(data).map(user=>console.log(user)) */}








      </div >



    </>


  )
}

export default Cases