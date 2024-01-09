import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import snake from './img/Carousel/snake.png'
import adivina from './img/Carousel/adivina.png'
import tictac from './img/Carousel/tictac.png'

function CarouselImage() {
  return (
    <>
    <div className="carousel-image">
    <Carousel>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={snake}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={adivina}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="img-fluid"
          src={tictac}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default CarouselImage;
