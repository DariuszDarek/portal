import React from 'react';

function TodoList(props) {
    const {todo} = props;

    const handleDelete = item => {
        const {onDeleteClick} = props;
        onDeleteClick(item);
    };

    return (
        <ul>
            {todo.map((item, i) => (
                <li key={i}>
                    {item}
                    <button onClick={() => handleDelete(item)} title="Delete todo">✖</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList