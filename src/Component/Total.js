import React, { Component } from 'react';
import './Total.css'

class Total extends Component {
  render() {
    const { counters } = this.props;
    const total = counters.reduce((acc, counter) => acc + counter, 0);

    return <div className='total'>Total: {total}</div>;
  }
}

export default Total;

