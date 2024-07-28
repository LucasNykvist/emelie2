import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import flowers from "../images/beautiful-roses.jpg"

const Mystery = () => {

    const n = useNavigate()
    const [show, setShow] = useState(false)

    return (
        <div className='main-container'>
            <h1>Såklart!</h1>
            <p>En vacker dam som du ska såklart få... </p>

            {!show && <button onClick={() => setShow(true)} className='main-button'>Trycka för att visa</button> }

            

            {show && (
                <>
                    <h3>BLOMMOR!</h3>
                    <p>*Du får såklart riktiga blommor också, inte bara digitala.</p>
                    <img width={"100%"} src={flowers}></img>
                </>)}




            <button className='main-button' onClick={() => n("/")} >Tillbaka</button>
        </div>
    )
}

export default Mystery