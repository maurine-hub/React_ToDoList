
// import { useState, useEffect } from 'react';
// import TodoForm from './components/TodoForm';
// import TodoList from './components/TodoList';
// // import { Filters } from './components/Filters';
// // import './index.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [filter, setFilter] = useState('all');

//   useEffect(() => {
//     const storedTodos = JSON.parse(localStorage.getItem('todos'));
//     if (storedTodos) {
//       setTodos(storedTodos);
//     }
//   }, []);

//   const addTodo = (text) => {
//     const newTodo = {
//       id: Date.now(),
//       text,
//       completed: false,
//     };
//     localStorage.setItem('todos', JSON.stringify([newTodo, ...todos]));
//     setTodos([newTodo, ...todos]);
//   };

//   const toggleComplete = (id) => {
//     setTodos(
//       todos.map((todo) =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   const deleteTodo = (id) => {
//    const newList = todos.filter((todo) => todo.id !== id);
//     localStorage.setItem( 'todos', JSON.stringify(newList));
//     setTodos(newList);
//   };

//   const filteredTodos = () => {
//     switch (filter) {
//       case 'completed':
//         return todos.filter(task => task.completed);
//       case 'incomplete':
//         return todos.filter(task => !task.completed);
//       default:
//         return todos;
//     }
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 text-red">Todo List</h1>
//       <TodoForm addTodo={addTodo} />
//       <div className='m-4'>
//         <button className='p-2 border-2 ' onClick={() => setFilter('all')}>Toutes</button>
//         <button className='p-2 border-2 ' onClick={() => setFilter('completed')}>Faites</button>
//         <button className='p-2 border-2 ' onClick={() => setFilter('incomplete')}>À faire</button>
//       </div>
//       <TodoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
//     </div>
//   );
// }

// export default App;

import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
// import { Filters } from './components/Filters';
// import './index.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const filteredTodos = () => {
    switch (filter) {
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'incomplete':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  // const modified = (id) => {
  //   const updatedTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, isEditing: true };
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };

  const modified = (id, newText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // const handleInputChange = (id) => {
  //   const newTodo = prompt("nouvelle tâche");
  //   const updatedTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, text: newTodo };
  //     }
  //     return todo;
  //   });
  //   setTodos(updatedTodos);
  // };

  // return (
  //   <div className="container h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500 flex-col justify-center ">
  //     <h1 className="text-2xl font-bold mb-4 text-red-200 ">Todo List</h1>
  //     <TodoForm addTodo={addTodo} />
  //     <div className='m-4'>
  //       <button className='p-2 border-2 text-white font-bold ' onClick={() => setFilter('all')}>Toutes</button>
  //       <button className='p-2 border-2 text-white font-bold ' onClick={() => setFilter('completed')}>Faites</button>
  //       <button className='p-2 border-2 text-white font-bold ' onClick={() => setFilter('incomplete')}>À faire</button>
  //     </div>
  //     <TodoList 
  //       todos={filteredTodos()} 
  //       toggleComplete={toggleComplete} 
  //       deleteTodo={deleteTodo} 
  //     />
  //   </div>
  // );

  return (
    <div className="lg: min-h-screen w-full bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center p-4">
      <div className=" w-1/2 border-2 rounded-lg shadow-xl p-6
        max-sm:w-full
      ">
        <h1 className="text-3xl font-bold mb-6 text-center text-white ">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <div className='flex justify-center space-x-2 my-8'>
          <button className='px-4 py-2 bg-purple-600 text-white font-bold rounded hover:bg-purple-700 transition' onClick={() => setFilter('all')}>Toutes</button>
          <button className='px-4 py-2 bg-green-600 text-white font-bold rounded hover:bg-green-700 transition' onClick={() => setFilter('completed')}>Faites</button>
          <button className='px-4 py-2 bg-yellow-600 text-white font-bold rounded hover:bg-yellow-700 transition' onClick={() => setFilter('incomplete')}>À faire</button>
        </div>
        <TodoList 
          todos={filteredTodos()} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
          modified={modified}
        />
      </div>
    </div>
  );
}

export default App;
