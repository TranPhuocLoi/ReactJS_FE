import React from 'react'

import Counter from './Counter'

class App extends React.Component {
  state = { showCounter: true }

  handleToggleCounter = () => {
    this.setState({ showCounter: !this.state.showCounter })
  }

  render() {
    return (
      <div>
        {this.state.showCounter ? (
          <div>
            <Counter
             name="Counter 1" 
             initialDelta={4}
             initialAutoIncreaseOn={false}
              />
            <Counter 
            name="Counter 2" 
            initialDelta={10}
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
