import React, { useState } from 'react'
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa'


function Cases() {
  const [inputFields, setInputFields] = useState([
    { medicine: "", dose: "", duration: "" },
    { medicine: "", dose: "", duration: "" },
  ]);

  const handleInput = (i, event) => {
    // console.log(i,event.target.name);
    const values = [...inputFields];
    values[i][event.target.name] = event.target.value;
    setInputFields(values);
  }

  const handleAdd = () => {
    setInputFields([...inputFields, { medicine: "", dose: "", duration: "" }])

  }

  const handleRemove = (i) => {
    const values = [...inputFields];
    values.splice(i, 1);
    setInputFields(values);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  }

  return (
    <>
      <h1>prescription</h1>
      <form action="" onSubmit={handleSubmit}>
        {
          inputFields.map((user, i) => (

            <div className="appointment-container">

              <div className="appointment-field" key={i}>

                <div>
                  <input type="text" placeholder='Medicine' name="Medicine" value={user.medicine} onChange={event => handleInput(i, event)} />
                </div>


                <div >
                  <input type="text" placeholder='Dose' name="Dose" value={user.dose} onChange={event => handleInput(i, event)} />
                </div>


                <div >
                  <input type="text" placeholder='Duration' name="Duration" value={user.duration} onChange={event => handleInput(i, event)} />
                </div>

                <span onClick={handleAdd}><FaPlusCircle className='addi' /> </span>

                <span onClick={handleRemove(i)}><FaMinusCircle className='addi' /> </span>


              </div>

            </div>

          ))
        }

        <button onClick={handleSubmit}>Submit</button>

      </form>


    </>
  )
}

export default Cases