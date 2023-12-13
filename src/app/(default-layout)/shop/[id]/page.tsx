"use client";
import React from "react";
import data from "@/components/Data/ProductData";
import SingleProducts from "@/components/SingleProduct/SingleProduct";

const SingleProduct = ({ params }: { params: { id: string } }) => {
  const product = data.find((product) => product.id === parseInt(params.id));

  return (
    <div>
      <SingleProducts product={product} />
    </div>
  );
};

export default SingleProduct;
