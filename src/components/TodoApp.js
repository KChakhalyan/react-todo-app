import { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoList from './TodoList';



function TodoApp() {
    const [filter, setFilter] = useState('all'); // all | active | completed
    // 1. Инициализируем состояние для задач
    const [todos, setTodos] = useState(() => {
        const stored = localStorage.getItem('todos');
        return stored ? JSON.parse(stored) : [];
    });
    const [inputValue, setInputValue] = useState('');



    // 2. Сохраняем задачи в localStorage при каждом изменении
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;

        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false // ← добавили

        };

        setTodos([...todos, newTodo]);
        setInputValue('');
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleComplete = (id) => {

        setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    }

    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });
    return (
        <div style={styles.container}>
            <h1>Список задач</h1>

            <TodoForm
                inputValue={inputValue}
                setInputValue={setInputValue}
                handleAddTodo={handleAddTodo}
            />

            <div style={styles.filterGroup}>
                <button onClick={() => setFilter('all')} style={filter === 'all' ? styles.activeFilterBtn : styles.filterBtn}>
                    Все
                </button>
                <button onClick={() => setFilter('active')} style={filter === 'active' ? styles.activeFilterBtn : styles.filterBtn}>
                    Активные
                </button>
                <button onClick={() => setFilter('completed')} style={filter === 'completed' ? styles.activeFilterBtn : styles.filterBtn}>
                    Завершённые
                </button>
            </div>
            <TodoList
                todos={filteredTodos}
                toggleComplete={toggleComplete}
                handleDelete={handleDelete}
            />
            {filteredTodos.length === 0 && <p>Нет задач для отображения</p>}
            <p>Всего задач: {todos.length}</p>
            <p>Активных задач: {todos.filter(todo => !todo.completed).length}</p>
            <p>Завершённых задач: {todos.filter(todo => todo.completed).length}</p>

        </div>
    );
}

const styles = {
    container: {
        maxWidth: '500px',
        margin: '2rem auto',
        padding: '1rem',
        borderRadius: '8px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
    },
    form: {
        display: 'flex',
        gap: '0.5rem',
        marginBottom: '1rem'
    },
    input: {
        flex: 1,
        padding: '0.5rem',
        fontSize: '1rem'
    },
    button: {
        padding: '0.5rem 1rem',
        fontSize: '1rem',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px'
    },
    list: {
        listStyle: 'none',
        padding: 0
    },
    item: {
        backgroundColor: '#fff',
        padding: '0.5rem',
        marginBottom: '0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: '4px'
    },
    deleteBtn: {
        background: 'transparent',
        border: 'none',
        color: '#ff5e5e',
        fontSize: '1.2rem',
        cursor: 'pointer'
    },
    text: {
        flex: 1,
        marginLeft: '0.5rem'
    },
    filterGroup: {
        display: 'flex',
        justifyContent: 'center',
        gap: '0.5rem',
        marginBottom: '1rem'
    },
    filterBtn: {
        padding: '0.3rem 0.8rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        backgroundColor: '#fff',
        cursor: 'pointer'
    },
    activeFilterBtn: {
        padding: '0.3rem 0.8rem',
        border: '1px solid #007bff',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        cursor: 'pointer'
    }

};

export default TodoApp;
