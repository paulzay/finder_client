/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import axios from 'axios';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = { myfaves: [] };
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    axios.get('https://automobillz.herokuapp.com/favorites', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(res => {
      const getFaves = [];
      const myFav = [];
      res.data.forEach(element => {
        getFaves.push(element.car_id);
      });
      getFaves.forEach(async element => {
        const faves = await axios.get(`https://automobillz.herokuapp.com/cars/${element}`);
        myFav.push(faves.data);
        this.setState({ myfaves: myFav });
      });
    });
  };

  render() {
    const { myfaves } = this.state;
    return (
      <div className="">
        <ul className="contents">
          {myfaves.map(car => (
            <Card className="card" key={car.id}>
              <Link to={`/cars/${car.id}`}>
                <img className="card-img-top" src={car.image_url} alt="Thumb" />
              </Link>
              <div className="card__body">
                <h1>{car.make}</h1>
                <span><Link to={`/cars/${car.id}`}>View Details</Link></span>
              </div>
            </Card>
          ))}
        </ul>
      </div>

    );
  }
}
