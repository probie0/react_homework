import React from 'react';
import ListItem from './ListItem'
import NewItem from './NewItem';
import {getAllTasks} from './api/TodoApi';

class TodoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {todoList: []};
        this.id = -1;
    }
    componentWillMount(){
        this.loadTasks();
    }

    loadTasks = async() => {
        const tasks = await getAllTasks();
        // const itemList = [{content: "play", done: false}, {content:"hello", done:false}];
        const itemList = await tasks.map(task => ({id: task.id, content: task.content}));
        await this.setState((prevState) => {
            const state = prevState;
            state.todoList = [];
            return state;
        });
        await this.setState((prevState) => {
            const state = prevState;
            state.todoList = itemList;
            return state;
        });
    }

    render(){
        return (
            <div id="todo-list">
                {
                    this.state.todoList.map((item) => <ListItem item={item} reloadTasks = {this.loadTasks}/>)
                }
                <NewItem reloadTasks = {this.loadTasks}/>
                {/*<button onClick={this.loadTasks}>刷新</button>*/}
            </div>
          );
    }
}

export default TodoList;