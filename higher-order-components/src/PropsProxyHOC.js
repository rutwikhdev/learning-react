import React, { Component } from 'react';

function ppHOC (WrappedComponent) {
    return class PP extends Component {
        render() {
            return <WrappedComponent {...this.props} />
        }
    }
}