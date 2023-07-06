import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    const { count } = this.state;
    const { onIncrement } = this.props;
    const incrementAmount = 1;
    this.setState({ count: count + incrementAmount });
    onIncrement(incrementAmount);
  };

  handleDecrement = () => {
    const { count } = this.state;
    const { onDecrement } = this.props;
    const decrementAmount = 1;
    this.setState({ count: count - decrementAmount });
    onDecrement(decrementAmount);
  };

  render() {
    const { count } = this.state;

    return (
      <div className='btn'>
        <button className='green' onClick={this.handleIncrement}>Increase</button>
        <button className='red' onClick={this.handleDecrement}>Decrease</button>
        <span>{count}</span>
      </div>
    );
  }
}

export default Counter;
