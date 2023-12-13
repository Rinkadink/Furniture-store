import React from "react";
import Header from "../Header/Header";
import HeroProps from "../HeroProps/HeroProps";
import CheckoutHero from "./CheckoutHero";
import PaymentPlan from "../PaymentPlan/PaymentPlan";
import Footer from "../Footer/Footer";
const Checkout = () => {
  return (
    <div>
      <Header />
      <HeroProps pageTitle="Checkout" />
      <CheckoutHero />
      <PaymentPlan />
      <Footer />
    </div>
  );
};

export default Checkout;
