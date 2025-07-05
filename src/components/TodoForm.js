
function TodoForm({ inputValue, setInputValue, handleAddTodo }) {
    return (
        <div style={styles.form}>
            <input
                type="text"
                placeholder="Введите задачу"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                style={styles.input}
            />
            <button onClick={handleAddTodo} style={styles.button}>
                Добавить
            </button>
        </div>
    );
}

const styles = {
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
    }
};

export default TodoForm;
