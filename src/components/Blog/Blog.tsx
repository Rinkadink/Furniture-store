"use client";
import React from "react";
import Header from "../Header/Header";
import HeroProps from "../HeroProps/HeroProps"
import BlogHero from "./BlogHero";
import PaymentPlan from "../PaymentPlan/PaymentPlan";
import Footer from "../Footer/Footer";

const Blog = () => {
  return (
    <div>
      <Header />
      <HeroProps pageTitle="Blog" />
      <BlogHero />
      <PaymentPlan />
      <Footer />
    </div>
  );
};

export default Blog;
