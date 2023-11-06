import react from "react"
import { useNavigate } from "react-router-dom"

export default function About() {
    const navigate = useNavigate()

    return(
        <div style={{padding: 20}}>
            <h2>About View</h2>
            <p>
                I am another paragraph that says about stuff about stuff
            </p>

            <button onClick={() => navigate("/")}>Return to Home</button>
            <button onClick={() => navigate(-1)}>Go Back 1</button>
            <button onClick={() => navigate(1)}>Go Forward 1</button>
        </div>
    )
}
