/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { getfaves } from '../../redux/actions/actionCreators';

export default class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = { myfaves: [] };
  }

  componentDidMount = () => {
    getfaves().then(res => {
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
    const { cars } = this.props;
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
// Favorites.propTypes = {
//   cars: PropTypes.instanceOf(Object).isRequired,
//   getCars: PropTypes.func.isRequired,
// };

// const mapStateToProps = state => ({
//   cars: state.cars.cars,
// });

// const mapDispatchToProps = dispatch => ({
//   getCars: () => dispatch(getCars()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
