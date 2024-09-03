import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

function TodoForm({ addTodo }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 ">
      <input
        type="text"
        className="border rounded p-2 bg-transparent placeholder-white outline-none text-white
        lg:w-[89%]
        max-sm:w-[86%]"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Entrez une nouvelle tâche..."
      />
      <button className="lg:bg-purple-700 text-white mt-2 p-2 rounded max-md:hidden ">Ajouter</button>
      <button className="max-md:bg-purple-700 text-white mt-2 p-[13px] rounded md:hidden"><FaPlus/></button>
    </form>
  );
}

export default TodoForm;