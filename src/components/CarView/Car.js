/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCar, AddTofavourite } from '../../redux/actions/actionCreators';
import './car.scss';

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    };

  }
  UNSAFE_componentWillMount() {
    this.props.getCar(this.props.match.params.id);
  }
  handleClick = (event) => {
    if (this.state.disabled) {
      return;
    }
    AddTofavourite(this.props.car.id)
    this.setState({ disabled: true });  
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
            <button type="button" onClick={this.handleClick} disabled={this.state.disabled}>
              {this.state.disabled ? 'Added to favorites ' : 'Add to favorites'}
            </button>
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
