import React from 'react';
import './App.css';

const colors = [
  'red',
  'blue',
  'brown',
  'green',
  'teal',
  'rosybrown',
  'tan',
  'plum',
  'saddlebrown',
  'violet',
  'pink',
  'white',
];

const arrDiv = Array(100).fill('div');
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleClick(name) {
    const counter = this.state.counter;
    let newCounter;
    switch (name) {
      case 'add':
        newCounter = counter + 1;
        break;
      case 'substract':
        newCounter = counter - 2;
        break;
      case 'divide':
        newCounter = counter / 3;
        break;
      case 'reset':
        newCounter = 0;
        break;

      default:
        break;
    }
    this.setState({
      counter: newCounter,
    });
  }

  render() {
    return (
      <div className="app">
        <div className="calculator-app">
          <button name="add" onClick={(e) => this.handleClick(e.target.name)}>
            Add
          </button>
          <button
            name="substract"
            onClick={(e) => this.handleClick(e.target.name)}>
            Substract
          </button>
          <button
            name="divide"
            onClick={(e) => this.handleClick(e.target.name)}>
            Divide
          </button>
          <button name="reset" onClick={(e) => this.handleClick(e.target.name)}>
            Reset
          </button>

          <h1>{this.state.counter}</h1>
        </div>
        {arrDiv.map((div, index) => (
          <div
            key={index}
            style={{
              backgroundColor:
                colors[Math.floor(Math.random() * colors.length)],
            }}>
            {index + 1}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
