import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true,
        })
    }

  render() {
    const { hasError } = this.state;
    if (hasError) {
        return <h1>Something went wrong, and we are working on it :(</h1>
    }
    return this.props.children;
  }
}
