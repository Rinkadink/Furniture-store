import React from "react";
import Header from "../Header/Header";
import Hero from "./Hero";
import HeroSubSec from "./HeroSubSec";
import TopPicks from "../TopPicks/TopPicks";
import Ads from "../Ads/Ads";
import HomeBlog from "./HomeBlog";
import HomeSocial from "./HomeSocial";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
    <main>
      <Header />
      <Hero />
      <HeroSubSec />
      <TopPicks />
      <Ads />
      <HomeBlog />
      <HomeSocial />
      <Footer />
    </main>
  );
};

export default Home;
