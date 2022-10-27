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
          <p>With SendIt, you can be saving time because it's safest,fastest and best delivery for your goods </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.pexels.com/photos/4246264/pexels-photo-4246264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>Enjoy with our courier service</h1>
          <p>
Courier services focuses on express and door-to-door delivery. Couriers may use self-owned, privately shared or public transportation to supply these services.</p>
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