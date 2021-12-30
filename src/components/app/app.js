import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import CreateTodoItem from '../create-todo-item';

import './app.css';

export default class App extends React.Component {

  state = {
    todoData: [
      { id: 1, label: 'Drink Coffee', important: false},
      { id: 2, label: 'Build Awesome App', important: true},
      { id: 3, label: 'Have a lunch', important: false},
    ]
  };

  deleteItem = (id) => {
    this.setState(({todoData})=>{
      let newTodoData = todoData.filter((item)=>item.id != id);

      return {
        todoData: newTodoData
      };
    })
  };

  addItem = (label) => {
    this.setState(({todoData})=>{
      return {
        todoData: [...todoData, {id:todoData.length+1,label:label,important:false}]
      }
    })
  }

  render(){
    const todoData = this.state;
  
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={this.state.todoData}
          onDeleted={ this.deleteItem } />
        <CreateTodoItem onAdded={ this.addItem } />
      </div>
    );
  }
}
