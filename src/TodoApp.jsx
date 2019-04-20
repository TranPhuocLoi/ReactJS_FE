import React from 'react'

import TaskInput from './components/TaskInput'
import TaskItem from './components/TaskItem'

export default class TodoApp extends React.Component {
  state = {
    tasks: [],
  }

  handleTaskSubmit = taskValue => {
    const currentTasks = this.state.tasks
    const nextTasks = currentTasks.concat([
      {
        value: taskValue,
        checked: false,
      },
    ])
    this.setState({ tasks: nextTasks })
  }

  render() {
    return (
      <div>
        <h1 style={{ marginBottom: 24 }}>Todo App</h1>

        <TaskInput onTaskSubmit={this.handleTaskSubmit} />
        <div>Checked: 0/{this.state.tasks.length}</div>

        <div style={{ marginTop: 24 }}>
          {this.state.tasks.map((task, idx) => (
            <TaskItem task={task} key={idx} />
          ))}
        </div>
      </div>
    )
  }
}
