import React, { Component } from 'react';
import './App.css';

class PlusOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plusses: 0
    }
  }

  onClick() {
    this.setState(prevState => prevState.plusses += 1);
  }

  render() {
    const { plusses } = this.state;
    return (
      <div className="plus-one">
        <button onClick={this.onClick.bind(this)}>+1</button><span>{plusses}</span>
      </div>
    );
  }
}

export default PlusOne;
