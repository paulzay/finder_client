/* eslint-disable no-console, no-alert */
import React, { Component } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = { myfaves: [] };
  }

  getfaves = async () => {
    const getFaves = [];
    const myFav = [];
    const token = localStorage.getItem('token');
    const response = fetch('https://automobillz.herokuapp.com/favorites', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    response.then(resp => resp.json())
      .then(data => {
        if (data.error) {
          alert(data.error);
        } else {
          data.forEach(element => {
            getFaves.push(element.car_id);
          });
          getFaves.forEach(async element => {
            const faves = await axios.get(`https://automobillz.herokuapp.com/cars/${element}`);
            myFav.push(faves.data);
            this.setState({ myfaves: myFav });
          });
        }
      });
  }

  componentDidMount = () => {
    this.getfaves();
  };

  render() {
    const { myfaves } = this.state;
    console.log(this.state);
    return (

      <div className="">
        <ul className="contents">
          {myfaves.map(car => (
            <Card className="card" key={car.id}>
              <a href={`/cars/${car.id}`}>
                <img className="card-img-top" src={car.image_url} alt="Thumb" />
              </a>
              <div className="card__body">
                <h1>{car.make}</h1>
                <span><a href={`/cars/${car.id}`}>View Details</a></span>
              </div>
            </Card>
          ))}
        </ul>
      </div>

    );
  }
}
