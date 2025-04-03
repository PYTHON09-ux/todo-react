import React, { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import TodoItems from "./TodoItems";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Todo = () => {
  const [toDoList, setToDoList] = useState(
    localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
  );
  const inputRef = useRef();

  // Toast notifications - changed position to top-right
  const successToastMessage = () => toast.success("ToDo Added Successfully", { 
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });
  
  const errorToastMessage = () => toast.error("Enter ToDo", { 
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
  });

  // Add task
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return errorToastMessage();

    const newToDo = { id: Date.now(), text: inputText, isComplete: false };
    setToDoList((prev) => [...prev, newToDo]);
    successToastMessage();
    inputRef.current.value = "";
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      add();
    }
  };

  // Delete task
  const deleteToDo = (id) => {
    setToDoList((prevToDo) => prevToDo.filter((todo) => todo.id !== id));
  };

  // Toggle task completion
  const toggle = (id) => {
    setToDoList((prevToDo) =>
      prevToDo.map((todo) => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo))
    );
  };

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDoList));
  }, [toDoList]);

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-purple-100 place-self-center w-full sm:w-11/12 max-w-md flex flex-col p-4 sm:p-7 min-h-[550px] rounded-xl shadow-lg border border-purple-200">
      {/* Title */}
      <div className="flex items-center mt-4 sm:mt-5 gap-2">
        <FontAwesomeIcon icon={faList} className="text-indigo-500 text-xl" />
        <h1 className="text-xl sm:text-2xl font-semibold flex-1 text-indigo-800">To-Do List</h1>
      </div>

      {/* Input Box - Mobile responsive */}
      <div className="flex items-center my-4 sm:my-5 bg-white/80 backdrop-blur-sm rounded-full p-1.5 shadow-md border border-indigo-100">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-10 pl-3 sm:pl-4 pr-2 placeholder:text-indigo-300 text-indigo-700 text-sm"
          type="text"
          placeholder="Add your task"
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 w-16 sm:w-20 h-10 text-white text-xs sm:text-sm font-medium cursor-pointer hover:opacity-90 transition-all shadow-md"
        >
          ADD +
        </button>
      </div>

      {/* Toast container positioned at top-right */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* To-Do Items */}
      <div className="max-h-64 overflow-y-auto w-full pr-1 custom-scrollbar mt-2">
        {toDoList.length === 0 ? (
          <div className="text-center py-8 text-indigo-400 italic">
            No tasks yet. Add a task to get started!
          </div>
        ) : (
          toDoList.map((item) => (
            <TodoItems
              key={item.id}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteToDo={deleteToDo}
              toggle={toggle}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;