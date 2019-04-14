import React from 'react'

const getValueColor = value => {
  if (value < 0) return 'red'
  if (value > 0) return 'green'
  return 'inherit'
}

class Counter extends React.Component {
  state = { value: 0, delta: 0, autoIncreaseOn: false }
  interval = null

  handleUpdateValue = () => {
    const currentValue = this.state.value
    this.setState({ value: currentValue + this.state.delta })
  }
  handleReset = () => {
    const currentValue = this.state.value
    this.setState({ value: 0 })
  }
  handleDeltaChange = delta =>
    this.setState({ delta: this.state.delta + delta })

  handleToggleAutoIncrease = () => {
    // * this.setState(nextState, callback)
    this.setState({ autoIncreaseOn: !this.state.autoIncreaseOn }, () => {
      if (this.state.autoIncreaseOn) {
        this.interval = setInterval(() => {
          this.handleUpdateValue()
        }, 500)
      } else {
        clearInterval(this.interval)
      }
    })
  }

  render() {
    const { value, delta,autoIncreaseOn } = this.state
    return (
      <div>
        <div>
          Current value:{' '}
          <span style={{ color: getValueColor(value) }}>{value}</span>
        </div>

        <div>
          <button onClick={this.handleUpdateValue}>
            Update + ({value + delta})
          </button>
          <button onClick={this.handleReset}>Reset</button>
        </div>

        <div>
          Delta: <span style={{ color: getValueColor(delta) }}>{delta}</span>
        </div>
        <div>
          <button onClick={() => this.handleDeltaChange(1)}>Increase</button>
          <button onClick={() => this.handleDeltaChange(-1)}>Decrease</button>
          <button onClick={this.handleToggleAutoIncrease}>
            {autoIncreaseOn ? 'Stop' : 'Start'} Auto Increase
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
