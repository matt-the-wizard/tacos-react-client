import React, { Component } from 'react';
import Taco from '../tacos/Taco';
import './App.css';
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTacos } from '../tacos/selectors';

class App extends Component {
    render() {
        const { tacos } = this.props;

        return (
            <div className="App">
                <header className="App-header">
                    {tacos.map((taco) =>
                        <Taco title={taco.title} price={taco.price} description={taco.description} />
                    )}
                </header>
            </div>
        )
    }
}

App.propTypes = {
    tacos: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
    }))
};

App.defaultProps = {
    tacos: []
};

const mapStateToProps = (state) => {
    return {
        tacos: getTacos(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch);
};

const mergeProps = (stateProps, dispatchProps, props) => ({
    ...props,
    ...stateProps,
    // someFunction: dispatchProps.someFunction
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(App);
