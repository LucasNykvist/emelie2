import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bs from "../images/blackstone.jpg"

const Restaurant = () => {
    const [isClicked, setIsClicked] = useState(false)

    const n = useNavigate()

    return (
        <div className='main-container'>
            <h1>Din nästa present... smakar mycket gott!</h1>

            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>

                <button className='main-button' onClick={() => setIsClicked(true)} >Tryck här för att se vart vi ska!</button>


                {isClicked && (
                    <>
                        <h2>MMMMM WOOOW! GOTTTTTTT, OXFILÈEEEEE!!</h2>
                        <img style={{
                            width: "100%",
                            maxWidth: "900px"
                        }} src={bs} ></img>

                        <button className='main-button' style={{
                            marginTop: "1rem"
                        }} onClick={() => n("/")} >Tillbaka</button>
                    </>
                )}

            </div>

        </div>
    )
}

export default Restaurant