import React from 'react';
import {reqAddTask} from "./api/TodoApi";

class NewItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputContent: ''
        };
    }

    onInputChange = (event) => {
        this.setState({inputContent: event.target.value});
    }
    onAddBtnClick = async () => {
        if(this.state.inputContent !== ''){
            let dateNow = new Date();
            dateNow.setHours(dateNow.getHours() + 8);
            const reqBody = JSON.stringify({id:0, content:this.state.inputContent, createdTime:dateNow});
            await reqAddTask("POST", reqBody);
            this.props.reloadTasks()
            this.setState({inputContent: ''});

        }
    }

    onAddKeyDown = async (event)=>{
        if(event.keyCode===13){
            await this.onAddBtnClick();
        }
    }
    
    render(){

        return(
            <div id="add-item" >
                <input value={this.state.inputContent} onChange = {this.onInputChange} onKeyDown={this.onAddKeyDown}/>
                <button onClick={this.onAddBtnClick}>Add</button>
            </div>
        );
    }
}

export default NewItem;