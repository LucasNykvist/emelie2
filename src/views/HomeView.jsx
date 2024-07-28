import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import wrangler from "../images/fam-wrangler.png"

const HomeView = () => {
    const [showPic, setShowPic] = useState(false)


    const n = useNavigate()

    return (
        <div className='main-container'>
            <h1 style={{ textAlign: "center" }}>GRATTIS PÅ FÖDELSEDAGEN EMELIE!!</h1>

            <p style={{ textAlign: "center" }}>Min älskade! Tryck på knapparna för att upptäcka dina presenter!</p>

            <nav style={{
                display: "flex",
                marginTop: "2rem",
                gap: "1rem",
                justifyContent: "center",
                width: "100%"
            }}>
                <button className='main-button' onClick={() => n("/brev")}>🎁 1</button>
                <button className='main-button' onClick={() => n("/restaurang")}>🎁 2</button>
                <button className='main-button' onClick={() => n("/blommor")}>🎁 3</button>
            </nav>

            <div style={{
                marginTop: "1rem",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"

            }}>
                {!showPic && (<button className='main-button' onClick={() => setShowPic(true)} style={{
                }}>👻 Tryck för att visa framtiden 👻</button>
                )}

            </div>


            {showPic && (<img style={{
                marginTop: "2rem"
            }} width="100%" src={wrangler}></img>
            )}



        </div >
    )
}

export default HomeView