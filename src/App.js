import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo, toggleTodo } from './redux/action';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [editId, setEditID] = useState(null);
  const [editText, setEditText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleEditTodo = (id, text) => {
    setEditID(id);
    setEditText(text);
  };

  const handleSaveEdit = () => {
    dispatch(editTodo(editId, editText));
    setEditID(null);
    setEditText('');
  };

  return (
    <div className="app">
      <h1 className="app-title">ToDo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button onClick={handleAddTodo} className="add-btn">
          Add Task
        </button>
      </div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="todo-edit-input"
                />
                <button onClick={handleSaveEdit} className="save-btn">
                  Save
                </button>
              </>
            ) : (
              <>
                <span className={`todo-text ${todo.complete ? 'completed' : ''}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  className={`toggle-btn ${todo.complete ? 'completed-btn' : ''}`}
                >
                  ✓
                </button>
                <button onClick={() => handleEditTodo(todo.id, todo.text)} className="edit-btn">
                  ✎
                </button>
                <button onClick={() => dispatch(deleteTodo(todo.id))} className="delete-btn">
                  🗑
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
