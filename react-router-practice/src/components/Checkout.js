import React from "react"
import {useNavigate} from "react-router-dom"

export default function Checkout() {
    const navigate = useNavigate()

    return(
        <div style={{padding: 20}}>
            <h1>Checkout - 3</h1>

            <p>
                I am some text here on the checkout page maybe I help u
            </p>

            <button onClick={() => navigate("/")}>Return to Home</button>
            <button onClick={() => navigate(-1)}>Go Back 1</button>
            <button onClick={() => navigate(-2)}>Go Back 2</button>
        </div>

    )
}
