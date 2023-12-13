import React, { useState } from "react";
import Link from "next/link";
import Header from "../Header/Header";
import HeroProps from "../HeroProps/HeroProps";
import BreadCrumbs from "./BreadCrumbs";
import data from "../Data/ProductData";
import ProductCard from "../ProductCard/ProductCard";
import Pagination from "../Pagination/Pagination";
import PaymentPlan from "../PaymentPlan/PaymentPlan";
import Footer from "../Footer/Footer";
const productsPerPage = 16;

function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = data?.slice(startIndex, endIndex);
  const totalPages = Math.ceil(data?.length / productsPerPage);

  const handlePageChange = (newPage: any) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="shop-page">
      <Header />
      <HeroProps pageTitle="Shop" />
      <BreadCrumbs />

      <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-items-center">
        {currentProducts?.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <PaymentPlan />
      <Footer />
    </div>
  );
}

export default Shop;
