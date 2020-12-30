import React, { useEffect } from 'react';
import { getCars } from '../../redux/actions/carActions';
import {Card} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './car.scss';

function Cars({ cars, getCars }) {

  useEffect(() => {
    getCars();
  }, [getCars]);

  return (
    <div className="">
      <ul className="contents">
        {cars.map(car => (
        <Card className="card" key={car.id}>
          <a href={`/cars/${car.id}`}>
            <img className="card-img-top" src={car.image_url} alt="Thumb" />
          </a>
          <div className="card__body">
            <h1>{car.make}</h1>
            <span><a href={`/cars/${car.id}`}>View Details</a></span>
          </div>
        </Card>))}
      </ul>
    </div>
  )
}


Cars.propTypes = {
  cars: PropTypes.instanceOf(Object).isRequired,
  getCars: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  cars: state.cars.cars,
});

const mapDispatchToProps = dispatch => ({
  getCars: () => dispatch(getCars()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
