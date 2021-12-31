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
      { id: 1, label: 'Drink Coffee', important: false, done: false},
      { id: 2, label: 'Build Awesome App', important: true, done: false},
      { id: 3, label: 'Have a lunch', important: false, done: false},
    ],
    filterData: [],
    searchText: '',
    status: 'all'
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
    const { todoData } = this.state;

    let newItem = {
      id: todoData.length+1,
      label: label,
      important: false,
      done: false
    };

    this.setState(({todoData})=>{
      return {
        todoData: [...todoData, newItem]
      }
    })
  };

  searchItems = (text) => {

    this.setState(({todoData})=>{
      const items = todoData.filter(x=>x.label.includes(text));
      return {
        filterData: items,
        searchText: text
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({todoData})=>{
      let itemIndex = todoData.findIndex(x=>x.id === id);
      let item = todoData.find(x=>x.id === id);
      item.done = !item.done;
      const startArr = todoData.slice(0, itemIndex);
      const endArr = todoData.slice(itemIndex+1);
      return {
        todoData: [...startArr, item, ...endArr]
      }
    })
  };

  onToggleImportant = (id) => {
    this.setState(({todoData})=>{
      let itemIndex = todoData.findIndex(x=>x.id === id);
      let item = todoData.find(x=>x.id === id);
      item.important = !item.important;
      const startArr = todoData.slice(0, itemIndex);
      const endArr = todoData.slice(itemIndex+1);
      return {
        todoData: [...startArr, item, ...endArr]
      }
    })
  };

  onActiveToggle = (property) => {
    if(property != 'all'){
      const { todoData } = this.state;
      const status = property == 'done';
      const items = todoData.filter(x=>x.done == status);

      this.setState({
        filterData: items,
        status: property
      })
    }else{
      this.setState({
        status: 'all'
      });
    };
  };

  render(){
    const { todoData, filterData, searchText, status } = this.state;

    const toDoCount = todoData.filter(x => !x.done).length;
    const doneCount = todoData.length - toDoCount;

    const todoList = (searchText == '' && status == 'all') ? todoData : filterData;
  
    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={ this.searchItems } />
          <ItemStatusFilter onActiveToggle={ this.onActiveToggle } />
        </div>
  
        <TodoList todos={todoList}
          onDeleted={ this.deleteItem }
          onToggleDone={ this.onToggleDone }
          onToggleImportant={ this.onToggleImportant } />
        <CreateTodoItem onAdded={ this.addItem } />
      </div>
    );
  }
}
