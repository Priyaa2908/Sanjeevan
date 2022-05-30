import React, { useRef, forwardRef, useState, useEffect } from 'react'
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import { MdPrint, MdDownload } from 'react-icons/md'
import { Button, Table } from 'react-bootstrap'
import './Labelprint.scss'
import { useParams } from 'react-router-dom'







function Labelprint() {
  const [data, setData] = useState([]);
  const params = useParams();

// =========================================================

const ComponentToPrint = forwardRef((props, ref) => {
  
  return <div ref={ref}>

{

data.map((item)=>
<div className='label-container'>
<div className="logo-img">
  {/* <img src="img/Logo.jpeg" alt="" /> */}
</div>

<h6>{item.medicine}</h6>
<div className="label-text">
  {/* <p>Name: Atharv Shivankar </p> */}
  <p>Name: {item.name} </p>
  {/* <p>Dose: 2 Tab 2 Time</p> */}
  <p>Dose:{item.dose}</p>
  {/* <p>Date: 23 April 2022</p> */}
  <p>Date: {item.date}</p>
</div>
</div>

)

}

   
  </div>
});



// =========================================================

  useEffect(() => {
    labelData();
  }, []);

  async function labelData() {
    console.warn(params);
    let result = await fetch(`http://localhost:4000/patients/prescription/${params.id}`);
    result = await result.json();
    // console.warn(result);
    setData(result);
  }


  const ref = useRef();
  return (
    <>

      <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>
          {({ handlePrint }) => (

            <div className='pp-con1' >
              <div className="label-icon">
                <div><MdPrint className="icon-pp" /> </div>
                <span id='print' onClick={handlePrint} >Print</span>
              </div>
            </div>
          )
          }
        </PrintContextConsumer>
      </ReactToPrint>

      <ComponentToPrint ref={ref} />

    </>
  )

}

export default Labelprint