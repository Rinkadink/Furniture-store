import React from 'react';
import Image from 'next/image';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Logo from "../../../public/images/furniture-logo.png"
import './hero.css';

const Hero = ({ pageTitle, breadcrumbs }:any) => {
  return (
    <div className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <Image src={Logo} alt="Logo" />
        <h1>{pageTitle}</h1>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      </div>
    </div>
  );
};
export default Hero