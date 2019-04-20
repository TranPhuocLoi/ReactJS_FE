import React from 'react'

import Counter from './Counter'

class App extends React.Component {
  state = { showCounter: true, delta:1,}

  handleToggleCounter = () => {
    this.setState({ showCounter: !this.state.showCounter })
  }
  handleDeltachange = nextData => {
    this.setState({ delta: nextData })
  }

  render() {
    return (
      <div>
        {this.state.showCounter ? (
          <div>
            <Counter
              name="Counter 1"
              //  initialDelta={4}
              delta={this.state.delta}
              onDeltaChange={this.handleDeltachange}
              initialAutoIncreaseOn={false}
            />
            <Counter
              name="Counter 2"
              // initialDelta={10}
              delta={this.state.delta}
              onDeltaChange={this.handleDeltachange}
              initialAutoIncreaseOn={true}
            />
          </div>
        ) : null}
        <button onClick={this.handleToggleCounter}>
          {this.state.showCounter ? 'Hide' : 'Show'} counter
        </button>
      </div>
    )
  }
}

export default App
