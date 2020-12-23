import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCar } from '../../redux/actions/carActions';
import './car.scss';

class Car extends Component {
  UNSAFE_componentWillMount() {
    this.props.getCar(this.props.match.params.id);
  }

  render() {
    const {
      image_url,model, make, year, description
    } = this.props._car;

    return (
      <div className="">
        <img src={image_url} alt="Thumb" />
        <p>{make}</p>
        <p>{model}</p>
        <p>{year}</p>
        <p>{description}</p>
      </div>
    );
  }
}
Car.propTypes = {
  params: PropTypes.object.isRequired,
  getCar: PropTypes.func.isRequired,
  _car: PropTypes.shape({
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    image_url: PropTypes.string.isRequired,
  }).isRequired,
  match: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  _car: state.cars.car,
});
export default connect(mapStateToProps, {
  getCar,
})(Car);
