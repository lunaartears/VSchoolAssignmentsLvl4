import React from "react"
import { useNavigate, Link } from "react-router-dom"
//import productData from "./productData"

export default function Products() {
    const navigate = useNavigate()

    const products = productData.map(product => {
        <h3>
            <Link to={`/products/${product._id}`}>{product.name}</Link> - ${product.price}
        </h3>
    })

    return (
        <div style={{ padding: 20 }}>
            <p>
                I am a paragraph that says stuff about super interesting stuff on the Products page
            </p>

            <button onClick={() => navigate("/checkout")}>Checkout</button>
            <button onClick={() => navigate("/")}>Return to Home</button>
            <button onClick={() => navigate(1)}>Go Forward 1</button>
            <button onClick={() => navigate(-1)}>Go Back 1</button>
        </div>
    )
}
