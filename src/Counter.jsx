import React from 'react'

const getValueColor = value => {
  if (value < 0) return 'red'
  if (value > 0) return 'green'
  return 'black'
}

class Counter extends React.Component {
  //  handleIncreaseClick = () => {
  //   const currentValue = this.state.value
  //   this.setState({ value: currentValue + 1})
  // }
  //   handleDecreaseClick = () => {
  //     const currentValue = this.state.value
  //     this.setState({ value: currentValue - 1})
  // }


  state = { value: 1, data:0 }
  handleClick = (delta) => {
    const currentValue = this.state.value
    return this.setState({ value: currentValue + delta})
  }
  handleClickNewVersion = (delta) => {
    const currentData = this.state.data
    return this.setState({ value: currentData + delta})
  }
  
  handleResetClick = () => {
    const currentValue = this.state.data
    this.setState({ value: 0 })
  }
  upDate = () =>{
    return this.setState({value: currnetValue + currentData})
  }
  render() {
    const value = this.state.value
    const data = this.state.data

    return (
      <div>
        <div>
          <div>
            Current value: <span style={{ fontSize: '2em', color: getValueColor(value) }}>
              {value}
            </span>
          </div>

          <div>
            <button style={{ backgroundColor: '#fff', border: '1px solid #000', borderRadius: '5px', padding: '5px' }} onClick={() => this.handleClick(data)}>Increase</button>
            <button style={{ backgroundColor: '#fff', border: '1px solid #000', borderRadius: '5px', padding: '5px' }} onClick={() => this.handleClick(data)}>Decrease</button>
            <button style={{ backgroundColor: '#fff', border: '1px solid #000', borderRadius: '5px', padding: '5px' }} onClick={this.handleResetClick}>Reset</button>
          </div>
        </div>

        <div>
          <div>
            Data: <span>{data}</span>
          </div>

          <div>
            <button style={{ backgroundColor: '#fff', border: '1px solid #000', borderRadius: '5px', padding: '5px' }} onClick={() => this.this.handleClickNewVersion(1)}>Increase</button>
            <button style={{ backgroundColor: '#fff', border: '1px solid #000', borderRadius: '5px', padding: '5px' }} onClick={() => this.this.handleClickNewVersion(-1)}>Decrease</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter
