import React, { useState } from 'react';
import InputField from './components/InputField';
import List from './components/List';
import {Todo} from './model'

const App: React.FC = () => {


  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo | null>(null);

  const handleAddTodo = (newTodo: Todo) => {
    
    if (newTodo.notes.trim()) {
      setTodos([...todos, newTodo]);
      setTodo(null);
    }
  };
  const handleDeleteTodo = (id: number) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const handleDoneTodo = (id: number) => {
    setTodos(todos.map((todo) => (
      todo.isDone == false ? todo.id === id ? { ...todo, isDone: true } : todo:todo.id === id ? { ...todo, isDone: false } : todo
    )));
};

const handleEditTodo = (id: number , newTodo : string) => {
  setTodos(todos.map((todo) => (
    todo.id === id ? { ...todo, notes : newTodo} : todo
  )));
};


    
    
  return (
    <div className="App">
      <div className=' text-center font-bold text-black text-3xl pt-10'>Taskify</div>
      <InputField todo={todo} setTodo={setTodo} onAddTodo={handleAddTodo} />
      <List todos={todos} onDeleteTodo= {handleDeleteTodo} onDoneTodo = {handleDoneTodo}  onEditTodo = {handleEditTodo}/>
    </div>
  );
};

export default App;
