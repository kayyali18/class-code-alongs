import React, { Component } from 'react';

class Counter extends Component {
    constructor () {
        super ();
        this.state = {
            count: 5
        }
    }

    increaseCount = () => {
        const newState = {
            count: ++this.state.count
        }

        this.setState(newState)
    }

  render() {
    return (
      <section>
          {
              this.state.count < 10
              ? <h2>Can you count to 10</h2>
              : <h2>You counted to 10</h2>
          }
        <span>{this.state.count}</span>
        <button onClick={this.increaseCount}>Add 1</button>
      </section>
    )
  }
}

export default Counter;