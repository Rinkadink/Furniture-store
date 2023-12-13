import React from "react"
import Header from "../Header/Header"
import ProductDetail from "./ProductDetails"
import ProductDesc from "../ProductDes/ProductDesc"
import TopPicks from "../TopPicks/TopPicks"
import Footer from "../Footer/Footer"

const SingleProduct = ({ product }: any) => {
    return (
        <div>
            <Header />
            <ProductDetail product={product} />
            <ProductDesc />
            <TopPicks />
            <Footer />
        </div>
    )
}

export default SingleProduct
