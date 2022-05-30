import React, { useEffect, useState } from 'react'

function Modal({ closeModal }) {
    // const [data, setData] = useState([{}])

    // useEffect(() => {
    //     getHistory();
    // }, [])

    // async function getHistory() {
    //     let result = await fetch("http://localhost:4000/patients/profile/109");
    //     result = await result.json();
    //     setData(result);
    //     console.warn(result);
    // }

    return (
        <div style={{ color: "green" }}>

            <h1>priyanka</h1>

            <p>wer</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo consectetur, excepturi debitis eligendi ad vero modi quos dolorum quo ab est possimus ut, maiores odio officiis rerum sit exercitationem dolor! Aliquid, itaque omnis, quis sapiente voluptas repellat ratione explicabo sequi non odit inventore excepturi temporibus dolorum nobis animi obcaecati dolor.</p>

            <button onClick={() => closeModal(false)}>cancel</button>
        </div>

    )
}

export default Modal