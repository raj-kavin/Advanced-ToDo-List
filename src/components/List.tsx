import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model'
import { MdOutlineDelete } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import { AiOutlineCheck } from "react-icons/ai";


interface Props {
    todos: Todo[];
    onDeleteTodo: (id: number) => void,
    onDoneTodo: (id: number) => void,
    onEditTodo: (id: number, newTodo: string) => void,
}

const List: React.FC<Props> = ({ todos, onDeleteTodo, onDoneTodo, onEditTodo }) => {

    const [note, setNote] = useState<string>("")
    const [show, setShow] = useState<boolean>(false)
    const [id, setId] = useState<number>()

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(()=>(
        inputRef.current?.focus()
    ),[show])

    return (
        <div>
            {todos.map((todo, index) => (
                <div className='flex items-center justify-center'>
                    {show && id == todo.id &&
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            onEditTodo(todo.id, note)
                            setShow(false)
                        }}>
                            <input
                                className='w-96 h-10 rounded-xl border-2 border-black p-5 text-lg'
                                type="text"
                                ref={inputRef}
                                placeholder='Type Here'
                                value={note}
                                onChange={(e) => setNote(e.target.value)}
                                required
                            />
                        </form>
                    }
                    {!show &&
                        <li className={`text-lg w-96 h-10 ${todo.isDone ? " line-through" : ""}`} key={index}>{todo.notes}</li>
                    }
                    {show && todo.id != id&&
                        <li className={`text-lg w-96 h-10 ${todo.isDone ? " line-through" : ""}`} key={index}>{todo.notes}</li>
                    }

                    <div className='flex gap-3'>
                        <MdOutlineDelete onClick={() => onDeleteTodo(todo.id)} className=' cursor-pointer text-xl' />
                        <TbEdit onClick={() => { setShow(true); setId(todo.id); setNote(todo.notes); }} className=' cursor-pointer text-xl' />
                        <AiOutlineCheck onClick={() => onDoneTodo(todo.id)} className=' cursor-pointer text-xl' />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;
