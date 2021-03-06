import React, { Component } from 'react'

export default class TaskInput extends Component {
  state = {
    value: '',
  }

  handleChange = event => {
    const nextValue = event.target.value

    this.setState({ value: nextValue })
  }

  handleKeyPress = event => {
    const value = this.state.value.trim()

    if (event.key === 'Enter' && value !== '') {
      this.props.onTaskSubmit(value)

      this.setState({ value: '' })
    }
  }

  render() {
    return (
      <div>
        <input
          placeholder="Add task"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
      </div>
    )
  }
}
