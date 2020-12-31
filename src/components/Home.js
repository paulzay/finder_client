import React from 'react';
import './home.scss';

const Home = () => (
  <div className="home">
    <div className="banner">
      <h1>Find a car anywhere</h1>
      <p>
        The best offers for you at any point of your journey.
        <br />
        Wherever you anywhere
        feel like yourself in your own car.
      </p>
      <button type="button">Start free</button>
    </div>
    <div className="stats">
      <div className="stats__left">
        <h2>All stats at your fingertips at any time</h2>
        <p>
          You will have the best tools to manage and collect information
          <br />
          about the cars. Full control will
          {' '}
          <br />
          {' '}
          save you from any unforeseen situations and save you
          money and customer relationships.
        </p>
        <button type="button">Learn More</button>
      </div>
      <div className="stats__right" />
    </div>
    <div className="best">
      <h2>Only the best cars for you taste</h2>
      <p>
        More than ten thousand cars at your disposal. We will find you
        the best cars and the conditions for a safe transaction.
      </p>
      <button type="button">Start free</button>
    </div>
  </div>
);
export default Home;
