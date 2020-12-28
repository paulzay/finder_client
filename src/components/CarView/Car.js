import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCar, likeCar } from '../../redux/actions/carActions';
import './car.scss';

class Car extends Component {
  UNSAFE_componentWillMount() {
    this.props.getCar(this.props.match.params.id);
  }
  handleClick = (e) => {
      e.preventDefault();
      likeCar(localStorage.getItem('user'),this.props._car.id)
      console.log('clicked')
    }
  render() {
    const {
      image_url,model, make, year, description
    } = this.props._car;

    return (
      <div className="view">
        <img src={image_url} alt="Thumb" />
        <p className="make">{make}</p>
        <p>{model}</p>
        <p>{year}</p>
        <p>{description}</p>
        <div>    
        <button type="button" onClick={this.handleClick}>Add to favorites </button>
        </div>
      </div>
    );
  }
}
Car.propTypes = {
  params: PropTypes.object.isRequired,
  getCar: PropTypes.func.isRequired,
  _car: PropTypes.shape({
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
  _car: state.cars.car,
});

export default connect(mapStateToProps, {
  getCar,
})(Car);
