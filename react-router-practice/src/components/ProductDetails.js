import React from "react"
import {useParams} from "react-router-dom"
import productData from "./productData"

export default function ProductDetails() {

    const {productId} = useParams()
    const foundProduct = productData.find(product => product._id === productId)

    return (
        <div>
            <h1>Product Detail Page</h1>
            <h3>{foundProduct.name} - ${foundProduct.price}</h3>
            <p>{foundProduct.description}</p>
        </div>
    )
}
