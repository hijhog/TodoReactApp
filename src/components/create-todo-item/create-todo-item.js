import React from 'react';

import './create-todo-item.css';

export default class CreateTodoItem extends React.Component{

    state = {
        inputValue: ''
    };

    setLabelChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    addTodoItem = () => {
        this.props.onAdded(this.state.inputValue);
        this.setState({
            inputValue: ''
        });
    }

    render(){

        return (
            <div className="d-flex">
                <input type="text" 
                    className="form-control input-panel"
                    value={this.state.inputValue}
                    onChange={this.setLabelChange}
                     />
                <button type="button"
                    className="btn btn-outline-success float-start"
                    onClick={this.addTodoItem}>Add</button>
            </div>
        )
    }
}