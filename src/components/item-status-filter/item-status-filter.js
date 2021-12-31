import React from 'react';

export default class ItemStatusFilter extends React.Component{

    state = {
        status: {
            'all': true,
            'active': false,
            'done': false
        }
    }

    getStatusClass = (name) => {
        return this.state.status[name] ? 'btn btn-info' : 'btn btn-outline-secondary';
    }

    onToggleStatus = (name) => {
        const { onActiveToggle } = this.props;
        let newStatus = {
            'all': false,
            'active': false,
            'done': false
        };

        newStatus[name] = true;
        onActiveToggle(name);
        this.setState({
            status: newStatus
        });
    };

    render(){

        return (
            <div className="btn-group">
                <button type="button"
                    onClick={()=>this.onToggleStatus('all')}
                    className={this.getStatusClass('all')}>All</button>
                <button type="button"
                    onClick={()=>this.onToggleStatus('active')}
                    className={this.getStatusClass('active')}>Active</button>
                <button type="button"
                    onClick={()=>this.onToggleStatus('done')}
                    className={this.getStatusClass('done')}>Done</button>
            </div>
        );
    }
}
