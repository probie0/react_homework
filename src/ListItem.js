import React from 'react';
import './Listitem.css';
import {reqDeleteTask} from "./api/TodoApi";
class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.item = props.item;
        this.state = {
            isdone: false
        };
    }
    delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    onDoneBtnClicked = () => {
        this.setState({isdone: !this.state.isdone});
    }
    onDeleteBtnClicked = async ()=>{
        await reqDeleteTask(this.item.id);
        await this.delay(500);
        await this.props.reloadTasks();

    }
    render(){
        const item = this.item;
        let isdone = this.state.isdone;
        return (
        <div itemID={this.item.id}>
            <span className={isdone ? 'done-item' : 'item'} >{item.content}&emsp;</span>
            <button className="done-btn" onClick={this.onDoneBtnClicked} disabled={isdone}>{isdone ? '已完成': '点击标记为完成'}</button>
            <button className="del-btn" onClick={this.onDeleteBtnClicked}>删除</button>
        </div>
        );
    }
}



export default ListItem;