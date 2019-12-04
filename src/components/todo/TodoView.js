import React, {Component} from 'react';

class TodoView extends Component {
    state = {
        todoInput: '',
        todoList: []
    };

    handleChange = e => {
        this.setState({todoInput: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        const {todoInput, todoList} = this.state;
        if (todoInput) {
            todoList.push(todoInput);
            this.setState({todoInput: '', todoList});
        }
    };

    handleDelete = i => {
        const {todoList} = this.state;
        const filteredList = todoList.filter(item => item !== i);
        this.setState({todoList: filteredList});
    };

    render() {
        const {todoInput, todoList} = this.state;
        return (
            <div style={{maxWidth: '450px'}}>
                <h1>To-do list</h1>
                <p>Basic one-component to-do list</p>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="username" value={todoInput} placeholder="What you have to do?"
                           onChange={this.handleChange}/>
                    <button type="submit">Add!</button>
                </form>

                <ul>
                    {todoList.map((item, i) => (
                        <li key={i}>
                            {item}
                            <button onClick={() => this.handleDelete(item)} title="Delete todo">✖</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default TodoView;