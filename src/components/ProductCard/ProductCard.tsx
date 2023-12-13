import React from "react"
import Image from "next/image"
import "./productCard.css"

const ProductCard = ({ product }: any) => {
    return (
        <div className="product-card">
            <Image
                width={500}
                height={500}
                className="image"
                src={`/images/${product.thumbnail}`}
                alt={product.name}
            />
            <div className="title">{product.name}</div>
            <div className="price">Rs. {product.price}</div>
        </div>
    )
}

export default ProductCard
