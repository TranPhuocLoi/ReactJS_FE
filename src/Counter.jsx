import React from 'react'

const getValueColor = value => {
  if (value < 0) return 'red'
  if (value > 0) return 'green'
  return 'inherit'
}

class Counter extends React.Component {
  state = { value: 0, delta: 0 }

  handleUpdateValue = () => {
    const currentValue = this.state.value
    this.setState({ value: currentValue + this.state.delta })
  }
  handleReset = () => {
    const currentValue = this.state.value
    this.setState({ value: 0 })
  }
  handleDeltaChange = (delta) => this.setState({ delta: this.state.delta + delta })

  constructor() {
    super();
    this.state = { increase: 0 };
    this._increase();
    this.state = { decrease: 0 };
    this._decrease();
  }
  
  _increase=()=> {
    this.setState({ increase: this.state.increase + 1 });
    setTimeout(this._increase.bind(this), 500);
  }
  _decrease=()=> {
    this.setState({ decrease: this.state.decrease - 1 });
    setTimeout(this._decrease.bind(this), 500);
  }

  render() {
    const { value, delta } = this.state
    return (
      <div>
        <div>
          Current value: <span style={{ color: getValueColor(value) }}>
            {value}
          </span>
        </div>

        <div>
          <button onClick={this.handleUpdateValue}>
            Update + ({value + delta})
          </button>
          <button onClick={this.handleReset}>
            Reset
          </button>
        </div>

        <div>
          Delta: <span style={{ color: getValueColor(delta) }}>{delta}</span>
        </div>
        <div>
          <button onClick={() => this.handleDeltaChange(1)}>
            Increase
          </button>
          <button onClick={() => this.handleDeltaChange(-1)}>
            Decrease
          </button>
        </div>
        <h1>{this.state.increase}</h1>
        <h1>{this.state.decrease}</h1>
      </div>
            )
          }
        }
        
        export default Counter
