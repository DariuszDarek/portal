import React, {Component} from 'react';

class TodoForm extends Component {
    state = {
        todoInput: '',
    };

    handleChange = e => {
        this.setState({todoInput: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const {todoInput} = this.state;
        if (todoInput) {
            this.sendInput();
            this.setState({todoInput: ''});
        }
    };

    sendInput = () => {
        const {onFormSubmit} = this.props;
        const {todoInput} = this.state;
        onFormSubmit(todoInput);
    };

    render() {
        const {todoInput} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="username" value={todoInput} placeholder="What you have to do?"
                       onChange={this.handleChange}/>
                <button type="submit">Add!</button>
            </form>
        );
    }
}

export default TodoForm