import React from 'react'
import { useNavigate } from 'react-router-dom'

const Mystery = () => {

    const n = useNavigate()

    return (
        <div className='main-container'>
            <h1>Mysterie!</h1>
            <p>Denna present är ett mysterie...</p>

            <button className='main-button' onClick={() => n("/")} >Tillbaka</button>
        </div>
    )
}

export default Mystery