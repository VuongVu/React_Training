import React, { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increCount = this.increCount.bind(this);
    this.decreCount = this.decreCount.bind(this);
  }

  increCount(count) {
    this.setState(() => {   
      return {
        count: count + 1
      };
    });
  }

  decreCount(count) {
    this.setState(() => {
      return {
        count: count - 1
      };
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increCount.bind(null, this.state.count)}>Increment</button>
        <button onClick={this.decreCount.bind(null, this.state.count)}>Decrement</button>
      </div>
    );
  }
}

export default Count;