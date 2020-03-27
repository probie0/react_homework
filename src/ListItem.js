import React from 'react';
import './Listitem.css';
class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.item = props.item;
        this.state = {
            isdone: this.item.done
        };
    }
    onDoneBtnClicked = () => {
        this.setState({isdone: !this.state.isdone});
    }

    render(){
        const item = this.item;
        let isdone = this.state.isdone;
        return (
        <div>
            <span className={isdone ? 'done-item' : 'item'}>{item.content}&emsp;</span>
            <button onClick={this.onDoneBtnClicked} disabled={isdone}>{isdone ? '已完成': '点击标记为完成'}</button>
        </div>
        );
    }
}



export default ListItem;