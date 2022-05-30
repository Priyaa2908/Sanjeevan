import React from 'react'

function () {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");

    async function signUp() {
        let data = { name, date, contact, address }
        console.warn(data);
        let result = await fetch("http://localhost:4000/", {
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
    <div>
    <div className='patient'>
            <h2>Patient Details</h2>
            <form action="" className='form'>
                <div>
                    <input type="text" placeholder='Enter patient name' onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <input type="datetime-local" onChange={(e) => setDate(e.target.value)} />
                </div>

                <div>
                    <input type="number" onChange={(e) => setContact(e.target.contact)} placeholder='Enter contact number' />
                </div>

                <div>
                    <input type="text" onChange={(e) => setAddress(e.target.address)} placeholder='Enter address' />
                </div>
                
                <div >
                    <input type="number" placeholder='Enter Age' onChange={(e) => setName(e.target.value)} className='field' />
                </div>

                <div >
                    <input type="text" placeholder='Medicine name' onChange={(e) => setName(e.target.value)} className='field' />
                </div>


                <div >
                    <input type="text" placeholder='Dose' onChange={(e) => setName(e.target.value)} className='field' />
                </div>


                <Button onClick={signUp} className='app-btn'>Submit</Button>

            </form>
        </div>


    </div>
  )
}

export default 