import React, { Component } from 'react'

export default class TaskList extends Component {
  render() {
    return (
      <div>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
    )
  }
}
