import React from 'react';
import '../App.css';
import { Button } from './Button';

function Home() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>WELCOME TO SENDIT</h1>
      <p>SendIt Is responsible for transporting packages and other goods from a mail facility to a personal or business address</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          TALK TO US TODAY
        </Button>
      </div>
    </div>
  );
}

export default Home;
