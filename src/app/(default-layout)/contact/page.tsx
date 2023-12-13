'use client'
import React from 'react'
import Header from "@/components/Header/Header";
import Hero from "@/components/HeroProps/HeroProps";
import ContactForm from "@/components/Contact/ContactForm";
import PaymentPlan from '@/components/PaymentPlan/PaymentPlan';
import Footer from '@/components/Footer/Footer';
const Contact = () => {
  return (
    <div>
      <Header/>
      <Hero pageTitle="Contact"/>
      <ContactForm/>
      <PaymentPlan/>
      <Footer/>
    </div>
  )
}

export default Contact
