
import TodoItem from './TodoItem';

function TodoList({ todos, toggleComplete, handleDelete }) {
    return (
        <ul style={styles.list}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleComplete={toggleComplete}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
}

const styles = {
    list: {
        listStyle: 'none',
        padding: 0
    }
};

export default TodoList;
