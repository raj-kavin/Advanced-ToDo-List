import React from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  onAddTodo: (todo: string) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, onAddTodo }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodo(todo);
  };

  return (
    <form className='flex items-center justify-center pt-10 gap-5 pb-5' onSubmit={handleSubmit}>
      <input 
        className='w-96 h-10 rounded-xl border-2 border-black p-5 text-lg' 
        type="text" 
        placeholder='Type Here'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
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
