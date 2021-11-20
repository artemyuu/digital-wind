import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import style from './PartnersSlider.module.css';

import slide_1 from '../../images/partners/1.png';
import slide_2 from '../../images/partners/2.png';
import slide_3 from '../../images/partners/3.png';
import slide_4 from '../../images/partners/4.png';



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
          <img src={slide_1} alt="" />
          <img src={slide_2} alt="" />
          <img src={slide_3} alt="" />
          <img src={slide_4} alt="" />
          <img src={slide_1} alt="" />
          <img src={slide_2} alt="" />
      </Slider>
    </div>
  );
}

export default PartnersSlider;
