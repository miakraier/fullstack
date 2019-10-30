import React, { Component } from "react";

export class Form extends Component {
  state = {
    todo: ""
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateState(this.state.todo);
  };
  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit ={this.handleSubmit}>
          <input
            type="text"
            placeholder="add Todo"
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Form;
