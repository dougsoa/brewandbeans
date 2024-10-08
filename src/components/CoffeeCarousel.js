import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import coffee1 from '../assets/coffee1.jpg';
import coffee2 from '../assets/coffee2.jpg';
import coffee3 from '../assets/coffee3.jpg';
import coffee4 from '../assets/coffee4.jpg';

const coffeeImages = [coffee1, coffee2, coffee3, coffee4];

function CoffeeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full h-screen">
      <Slider {...settings}>
        {coffeeImages.map((image, index) => (
          <div key={index} className="w-full h-full flex justify-center items-center relative">
            <img
              src={image}
              alt={`Coffee ${index + 1}`}
              className="w-full h-full object-cover"
              style={{ maxHeight: '100vh' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CoffeeCarousel;
