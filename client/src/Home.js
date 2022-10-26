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
          <h1>Welcome to SendIt</h1>
          <p>With SendIt, you can be saving time because it's safest,fasterst and best delivery for your goods </p>
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