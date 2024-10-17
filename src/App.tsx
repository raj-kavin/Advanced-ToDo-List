import React, { useState } from 'react';
import InputField from './components/InputField';
import List from './components/List';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState<string>('');

  const handleAddTodo = (newTodo: string) => {
    
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setTodo('');
    }
  };

  return (
    <div className="App">
      <div className=' text-center font-bold text-black text-3xl pt-10'>Taskify</div>
      <InputField todo={todo} setTodo={setTodo} onAddTodo={handleAddTodo} />
      <List todos={todos} />
    </div>
  );
};

export default App;
