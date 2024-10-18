import React, { useState } from 'react';
import { Todo } from '../model';

interface Props {
  todo: Todo | null;
  setTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
  onAddTodo: (todo: Todo) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, onAddTodo }) => {
  const [note, setNote] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: Date.now(),
      notes: note,
      isDone: false,
    };
    onAddTodo(newTodo);
    setNote('');
  };

  return (
    <form className='flex items-center justify-center pt-10 gap-5 pb-5' onSubmit={handleSubmit}>
      <input 
        className='w-96 h-10 rounded-xl border-2 border-black p-5 text-lg' 
        type="text" 
        placeholder='Type Here'
        value={note}
        onChange={(e) => setNote(e.target.value)}
        required 
      />
      <button 
        className='w-20 h-10 text-lg bg-black text-white rounded-xl hover:shadow-2xl hover:border-2 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out hover:scale-105' 
        type='submit'
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
