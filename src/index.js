// import React, { Component } from 'react';
// import Counter from './Component/Counter';
// import Total from './Component/Total';


// class App extends Component {
//   state = {
//     counters: [0, 0, 0, 0]
//   };

//   handleIncrement = (index, incrementAmount) => {
//     const { counters } = this.state;
//     const updatedCounters = [...counters];
//     updatedCounters[index] += incrementAmount;
//     this.setState({ counters: updatedCounters });
//   };

//   handleDecrement = (index, decrementAmount) => {
//     const { counters } = this.state;
//     const updatedCounters = [...counters];
//     updatedCounters[index] -= decrementAmount;
//     this.setState({ counters: updatedCounters });
//   };

//   render() {
//     const { counters } = this.state;

//     return (
//       <div>
//         {counters.map((count, index) => (
//           <Counter
//             key={index}
//             onIncrement={(incrementAmount) =>
//               this.handleIncrement(index, incrementAmount)
//             }
//             onDecrement={(decrementAmount) =>
//               this.handleDecrement(index, decrementAmount)
//             }
//           />
//         ))}
//         <Total counters={counters} />
//       </div>
//     );
//   }
// }

// export default App;







import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));


