import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'flux/actions/actions'
import SearchBar from 'components/SearchBar/SearchBar'

@connect(mapStateToProps, mapDispatchToProps)
export default class App extends Component {
    render() {
        const { actions, ...other } = this.props;

        console.log(other);

        return (
            <div style={STYLES}>
                <SearchBar {...other} actions={actions}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchSuggestions : state.get('searchSuggestions').toJS(),
        searchTerm: state.get('searchTerm')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch)
    }
}

App.propTypes = {
    searchSuggestions : PropTypes.arrayOf(PropTypes.object),
    searchTerm: PropTypes.string
};

const STYLES = {
    padding: '3rem'
};
