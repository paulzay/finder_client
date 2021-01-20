/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCar, AddTofavourite } from '../../redux/actions/actionCreators';
import './car.scss';

class Car extends Component {
  UNSAFE_componentWillMount() {
    this.props.getCar(this.props.match.params.id);
  }

  render() {
    const { car } = this.props;

    return (
      <div className="view">
        <div className="contain">
          <div className="car__img">
            <img src={car.image_url} alt="Thumb" />
          </div>
          <p className="make">{car.make}</p>
          <p>{car.model}</p>
          <p>{car.year}</p>
          <p>{car.description}</p>
          <div>
            <button type="button" onClick={() => { AddTofavourite(car.id); }}>Add to favorites </button>
          </div>
          </div>
      </div>
    );
  }
}
Car.propTypes = {
  params: PropTypes.object.isRequired,
  getCar: PropTypes.func.isRequired,
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  car: state.car.car,
});

export default connect(mapStateToProps, {
  getCar,
})(Car);
