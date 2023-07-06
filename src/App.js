// import './App.css';

// function App() {
//   return (
//     <div className="App">
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import Counter from './Component/Counter';
import Total from './Component/Total';

class App extends Component {
  state = {
    counters: [0, 0, 0, 0]
  };

  handleIncrement = (index, amount) => {
    const { counters } = this.state;
    const updatedCounters = [...counters];
    updatedCounters[index] += amount;
    this.setState({ counters: updatedCounters });
  };

  handleDecrement = (index, amount) => {
    const { counters } = this.state;
    const updatedCounters = [...counters];
    updatedCounters[index] -= amount;
    this.setState({ counters: updatedCounters });
  };

  render() {
    const { counters } = this.state;

    return (
      <div>
        <Counter
          onIncrement={amount => this.handleIncrement(0, amount)}
          onDecrement={amount => this.handleDecrement(0, amount)}
        />
        <Counter
          onIncrement={amount => this.handleIncrement(1, amount)}
          onDecrement={amount => this.handleDecrement(1, amount)}
        />
        <Counter
          onIncrement={amount => this.handleIncrement(2, amount)}
          onDecrement={amount => this.handleDecrement(2, amount)}
        />
        <Counter
          onIncrement={amount => this.handleIncrement(3, amount)}
          onDecrement={amount => this.handleDecrement(3, amount)}
        />
        <Total counters={counters} />
      </div>
    );
  }
}

export default App;
