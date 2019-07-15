import React from 'react';
import PropTypes from 'prop-types'
import './Taco.css';

const Taco = (props) => {
    return (
        <div className="Taco">
            <h1>{props.title}</h1>
            <p className="Taco-Description">{props.description}</p>
            <p className="Taco-Price">${props.price}</p>
        </div>
    );
};

Taco.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number
};

Taco.defaultProps = {
    title: '',
    description: '',
    price: 0.00,
};

export default Taco;