import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListHeader from './TodoListHeader';
import TodoList from './TodoList';
import NewItem from './NewItem';

class App extends React.Component{
  render(){
    return (
      <div className="App">
            <TodoListHeader/>
            <TodoList/>
      </div>
    );
  }
}
 

export default App;
