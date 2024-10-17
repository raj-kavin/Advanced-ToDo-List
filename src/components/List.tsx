import React from 'react';

interface Props {
    todos: string[];
}

const List: React.FC<Props> = ({ todos }) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <div className='flex items-center justify-center'>
                    <li className='text-lg w-96 h-10' key={index}>{todo}</li>
                </div>
            ))}
        </div>
    );
};

export default List;
