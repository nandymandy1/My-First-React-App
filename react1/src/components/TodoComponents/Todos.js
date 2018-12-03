import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

    const todoList = (todos.length) ? (
        todos.map(todo => {
            return (
                <div className="center collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <span className="right" onClick={() => { deleteTodo(todo.id) }}>X</span>
                </div>
            )
        })
    ) : (
            <p className="center">There are no todos in the list. Yeay!</p>
        )


    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;

