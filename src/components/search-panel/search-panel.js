import React from 'react';

import './search-panel.css';

export default class SearchPanel extends React.Component {
  
  state = {
    inputValue: ''
  }

  onChange = (event) => {
    const { onSearch } = this.props;
    onSearch(event.target.value);
    this.setState({
      inputValue: event.target.value
    });
  };

  render(){
    const searchText = "Type here to search";

    return (
      <input 
        type="text"
        placeholder={ searchText }
        onChange={ this.onChange }
        value={ this.state.inputValue }
        className="form-control search-input" />
    );
  }
}
