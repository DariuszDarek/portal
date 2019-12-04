import React, {Component} from 'react';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class Todo2View extends Component {
    state = {
        todoList: []
    };

    updateTodoList = item => {
        const {todoList} = this.state;
        todoList.push(item);
        this.setState({todoList});
    };

    deleteItem = itemToDelete => {
        const {todoList} = this.state;
        const filteredList = todoList.filter(item => item !== itemToDelete);
        this.setState({todoList: filteredList});
    };

    render() {
        const {todoList} = this.state;
        return (
            <div style={{maxWidth: '450px'}}>
                <h1>To-do list 2</h1>
                <p>To-do list with parent-children relation</p>

                <TodoForm onFormSubmit={this.updateTodoList}/>

                <TodoList todo={todoList} onDeleteClick={this.deleteItem}/>
            </div>
        )
    }
}

export default Todo2View;