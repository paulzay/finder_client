import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = { myfaves: [] };
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token');
    fetch('https://automobillz.herokuapp.com/favorites', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        const getFaves = [];
        const myFav = [];
        json.forEach(element => {
          getFaves.push(element.car_id);
        });
        getFaves.forEach(element => {
          fetch(`https://automobillz.herokuapp.com/cars/${element}`)
            .then(response => response.json())
            .then(json => {
              myFav.push(json);
              this.setState({ myfaves: myFav });
            });
        });
      });
  };

  render() {
    const { myfaves } = this.state;
    if (myfaves.length > 0) {
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
    return (
      <h1>You do not have any favorites yet.</h1>
    );
  }
}
