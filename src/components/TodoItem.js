import React from 'react';

function TodoItem({ todo, toggleComplete, handleDelete }) {
    return (
        <li style={styles.item}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
            />
            <span
                style={{
                    ...styles.text,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#aaa' : '#000'
                }}
            >
                {todo.text}
            </span>
            <button
                onClick={() => handleDelete(todo.id)}
                style={styles.deleteBtn}
            >
                ✖
            </button>
        </li>
    );
}

const styles = {
    item: {
        backgroundColor: '#fff',
        padding: '0.5rem',
        marginBottom: '0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '4px'
    },
    text: {
        flex: 1,
        marginLeft: '0.5rem',
        fontSize: '1rem'
    },
    deleteBtn: {
        background: 'transparent',
        border: 'none',
        color: '#ff5e5e',
        fontSize: '1.2rem',
        cursor: 'pointer'
    }
};

export default TodoItem;
