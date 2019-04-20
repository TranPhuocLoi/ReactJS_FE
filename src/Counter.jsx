import React from 'react'

const getValueColor = value => {
  if (value < 0) return 'red'
  if (value > 0) return 'green'
  return 'inherit'
}

class Counter extends React.Component {
  state = {
    value: 0,
    // delta: this.props.initialDelta,
    autoIncreaseOn: this.props.initialAutoIncreaseOn,
  }
  interval = null

  handleUpdateValue = () => {
    const currentValue = this.state.value
    this.setState({ value: currentValue + this.props.delta })
  }
  handleDeltaChange = delta => {
    this.props.onDeltaChange(this.props.delta + delta)
  }
  // handleDeltaChange = delta =>
  //   this.setState({ delta: this.state.delta + delta })

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

  // componentDidMount = () => {
  //   console.log('componentDidMount')
  //   this.interval = setInterval(() => {
  //     this.handleUpdateValue()
  //   }, 500)
  // }
  componentDidMount = () => {
    if (this.state.autoIncreaseOn)
      this.interval = setInterval(() => {
        this.handleUpdateValue()
      }, 500)
  }

  render() {
    console.log('render')
    const { value, autoIncreaseOn } = this.state
    const { delta } = this.props

    return (
      <div
        style={{
          paddingBottom: '30px',
          borderBottom: '1px solid #fff',
        }}
      >
        <div
          style={{
            fontWeight: 'bold',
            marginBottom: 16,
          }}
        >
          {this.props.name}
        </div>
        <div>
          Current value:{' '}
          <span style={{ color: getValueColor(value) }}>{value}</span>
        </div>

        <div>
          <button onClick={this.handleUpdateValue}>
            Update ({value + delta})
          </button>
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

  componentWillUnmount = () => {
    console.log('componentWillUnmount')
    clearInterval(this.interval)
  }
}

export default Counter
