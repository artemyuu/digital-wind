import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import style from './PartnersSlider.module.css';

import slide1 from '../../images/partners/1.png'
import slide2 from '../../images/partners/2.png'
import slide3 from '../../images/partners/3.png'
import slide4 from '../../images/partners/4.png'

const PartnersSlider = () => {
  const { innerWidth: width } = window;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: width === 320 ? 1 : 4 ,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="container">
      <Slider className={style["partners-slider"]} {...settings}>
          <img src={slide1} alt="" />
          <img src={slide2} alt="" />
          <img src={slide3} alt="" />
          <img src={slide4} alt="" />
          <img src={slide1} alt="" />
          <img src={slide2} alt="" />
      </Slider>
    </div>
  );
}

export default PartnersSlider;
