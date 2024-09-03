/* eslint-disable react/prop-types */
// import React from 'react';
import { useState } from 'react';
import React from 'react';
import {FaTrash} from 'react-icons/fa';

import { MdDelete } from 'react-icons/md'; // Material Design
import { FaCheck } from 'react-icons/fa';
import {FaPencilAlt} from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
function TodoItem({ todo, toggleComplete, deleteTodo, modified }) {
    const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    modified(todo.id, newText);
    setIsEditing(false);
  };
  
  return (
    
    <div className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded w-full">
        <input type="checkbox" 
        checked={todo.completed} 
        onClick={() => toggleComplete(todo?.id)}/>
        
        {isEditing ? (
        <input
        className='outline-purple-500 outline-1 ml-2'
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        />
    ) : (
        <span className='hidden'>{todo.text}</span>
        
      )}

      <div
        className={`flex-1 ml-3  ${todo.completed ? 'line-through text-gray-500' : ''}`}
      >
        {todo.text}
      </div>

      {isEditing ? (
        <button className='text-purple-700' onClick={handleEdit}><FaCheck/></button>
      ) : (
        //   <button onClick={() => setIsEditing(true)}>Modifier</button>
          <button className='text-purple-700 pl-6'onClick={() => setIsEditing(true)}><FaPencilAlt/></button>
      )}

        <button onClick={() => deleteTodo(todo.id)} className="px-3 text-red-500"><FaTrash/></button>
    </div>
  );
}

export default TodoItem;

