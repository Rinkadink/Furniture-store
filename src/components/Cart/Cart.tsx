import React from "react";
import Header from "../Header/Header";
import HeroProps from "../HeroProps/HeroProps"
import CartHero from "./CartHero";
import PaymentPlan from "../PaymentPlan/PaymentPlan";
import Footer from "../Footer/Footer";
const Cart = () => {
  return (
    <div>
      <Header />
      <HeroProps pageTitle="Cart" />
      <CartHero />
      <PaymentPlan />
      <Footer />
    </div>
  );
};

export default Cart;