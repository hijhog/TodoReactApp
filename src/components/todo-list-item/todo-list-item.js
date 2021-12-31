import React from 'react';

import './todo-list-item.css';

export default class TodoListItem extends React.Component{

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState((state)=>{
            return {
                done: !state.done
            };
        });
    };

    onMarkImportant = () => {
        this.setState((state)=>{
            return {
                important: !state.important
            };
        });
    };

    render(){
        const { label, done, important, onDeleted, onToggleDone, onToggleImportant } = this.props;
        //const { done, important } = this.state;

        let classNames = 'todo-list-item';
        if(done){
            classNames += ' done';
        }

        if(important){
            classNames += ' important';
        }  
    
        return (
            <span className={classNames}>
                <span
                    className="todo-list-item-label"
                    onClick={ onToggleDone }>
                    {label}
                </span>
    
                <button type="button"
                        className="btn btn-outline-success btn-sm float-end"
                        onClick={ onToggleImportant }>
                    <i className="fas fa-exclamation"></i>
                </button>
    
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-end"
                        onClick={ onDeleted }>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </span>
        );
    }
}
