import React,{useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
import Header from '../Header/Header'

function CasePatient(props) {
  const [data, setData] = useState([]);

  console.warn("props",props.match.params.name)

  useEffect(async()=>{

    let result = await fetch(`http://localhost:4000/patients/profile/`+props.match.params.name);
    result = await result.json();
    console.warn(result);
    setData(result)
   
  })

  return (
    <>
      <Header />
      <div>CasePatient</div>
      <input type="text" Value={data.name} /> <br />
     u
    </>

  )
}

export default withRouter(CasePatient)