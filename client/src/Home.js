import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/09/07/10/01/landscape-7438429_960_720.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to SendIt</h3>
          <p>With SendIt, you can be saving time and creating consistent contact for your audience...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2014/04/17/23/26/environmental-protection-326923_1280.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Welcome to SendIt</h3>
          <p>With SendIt, you can create content and publish across all channels instantly.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2022/07/20/18/44/reading-7334749_960_720.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Welcome to SendIt</h3>
          <p>
          With SendIt, you can create content and publish across all channels instantly.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<ControlledCarousel />);

const Home = () => {
    return (
        <section className='Home'>
            <div className='container'>
                <ControlledCarousel/>
            </div>
        </section>
    )
}
export default Home;