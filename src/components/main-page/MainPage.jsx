import React from 'react';
import SlideHeader from "../slide-header/SlideHeader";
import Aboutcontest from "../about-contest/AboutContest";
import Scorebar from "../score-bar/ScoreBar";
import SectionTitle from "../section-title/SectionTitle";
import Winners from "../winners/Winners";
import Works from "../works/Works";
import PartnersSlider from "../partners-slider/PartnersSlider";
import Footer from "../footer/Footer";

const MainPage = () => {
  return (
    <>
      <SlideHeader/>         
      <Aboutcontest/>
      <Scorebar/>
      <SectionTitle title="наши победители"/>
      <Winners />
      <SectionTitle title="работы участников"/>
      <Works />
      <SectionTitle title="наши партнёры"/>
      <PartnersSlider />
      <Footer />
    </>
  );
}

export default MainPage;
