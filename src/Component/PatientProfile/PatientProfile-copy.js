import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print';
import { Button, Table } from 'react-bootstrap'
import Header from '../Header/Header'
import Footer from '../Footer'
import Patient from './Patient.scss'
import { MdPrint, MdDownload } from 'react-icons/md'
import Print from './Print.js'















function PatientProfile() {

        return (
            <>
            {/* <Print/> */}

                <div className='pp-con1' >
                    <div className="pp-icon">
                        <div><MdPrint className="icon-pp" /> </div>
                        <span id='print' onClick={() => window.print()} >Print</span>
                    </div>

                    <div className="pp-icon">
                        <div> <MdDownload className="icon-pp" /> </div>
                        <span>Download</span>
                    </div>

                </div>

                <div className='pp-container'>

                    <div className="pp-con2">
                        <div>
                            <img src="img/dr.jpeg" alt="" id='pp-img' />
                        </div>

                        <div className='pp-text'>
                            <p> <strong> SANJIVAN CHIKITSA</strong> </p>
                            <p>MBBS.MD.Diabetology</p>
                            <p>Reg No# MD77182</p>
                            <p> 1087 Pune, Maharashtra 411030</p>
                        </div>
                    </div>
                    <hr />

                    <div className='pp-con4'>
                        <h6>Patient Details</h6>
                        <p>MRN#34343478</p>
                        <p>sagar aer</p>
                        <p>+91 8989898989</p>
                    </div>

                    <div className='pp-con5'>
                        <p> Prescribed on: </p>
                        <p>12 April 2022</p>
                    </div>


                    <div className="ppgrid-system">
                        <h5>Prescribed Medication</h5>
                        <Table striped bordered hover>

                            <thead>
                                <tr>
                                    <th>Medication</th>
                                    <th>Dosage</th>
                                    <th>Duration</th>
                                    <th>Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>paracitamol</td>
                                    <td>tablet/day</td>
                                    <td>1 month</td>
                                    <td>2 </td>
                                </tr>
                                <tr>
                                    <td>vitamin C</td>
                                    <td>day/night</td>
                                    <td>5 days</td>
                                    <td>4</td>
                                </tr>
                                <tr>
                                    <td>Crosin 500</td>
                                    <td>1/day</td>
                                    <td>10</td>
                                    <td>1</td>
                                </tr>
                            </tbody>
                        </Table>


                        <div className="dispense">
                            <h6>Dispensed</h6>
                            <br />
                            <h6>Sign:</h6>

                        </div>
                    </div>

                </div>
            </>
        )
    // }
}

export default PatientProfile