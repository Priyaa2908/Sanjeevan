import React, { useRef, forwardRef, useState, useEffect } from 'react'
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import { MdPrint, MdDownload } from 'react-icons/md'
import { Button, Table } from 'react-bootstrap'
import './Labelprint.scss'
import { useParams } from 'react-router-dom'

const ComponentToPrint = forwardRef((props, ref) => {
  
  return <div ref={ref}>

    <div className='label-container'>
      <div className="logo-img">
        {/* <img src="img/Logo.jpeg" alt="" /> */}
      </div>

      <h6>CHANDRAPRABHA</h6>
      <div className="label-text">
        <p>Name: Atharv Shivankar </p>
        <p>Dose: 2 Tab 2 Time</p>
        <p>Date: 23 April 2022</p>
      </div>
    </div>


    <div className='label-container'>
      <div className="logo-img">
        {/* <img src="img/Logo.jpeg" alt="" /> */}
      </div>

      <h6>CHANDRAPRABHA</h6>
      <div className="label-text">
        <p>Name: Atharv Shivankar </p>
        <p>Dose: 2 Tab 2 Time</p>
        <p>Date: 23 April 2022</p>
      </div>
    </div>


    <div className='label-container'>
      <div className="logo-img">
        {/* <img src="img/Logo.jpeg" alt="" /> */}
      </div>

      <h6>CHANDRAPRABHA</h6>
      <div className="label-text">
        <p>Name: Atharv Shivankar </p>
        <p>Dose: 2 Tab 2 Time</p>
        <p>Date: 23 April 2022</p>
      </div>
    </div>

  </div>
});





function Labelprint() {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    labelData();
  }, []);

  async function labelData() {
    console.warn(params);
    let result = await fetch(`http://localhost:4000/patients/profile/${params.id}`);
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