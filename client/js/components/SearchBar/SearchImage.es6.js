import React, { PropTypes } from 'react';
import Radium from 'radium'

const SearchImage = (props) => {
    return (
        <i style={STYLES} className="fa fa-search" />
    );
};

const STYLES = {
    color: 'grey',
    fontSize: '1.5rem',
    left: '.5rem',
    position: 'absolute',
    top: '.5rem'
}

export default Radium(SearchImage);