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

  // Toast notifications
  const successToastMessage = () => toast.success("ToDo Added Successfully", { position: "top-center" });
  const errorToastMessage = () => toast.error("Enter ToDo", { position: "top-center" });

  // Add task
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") return errorToastMessage();

    const newToDo = { id: Date.now(), text: inputText, isComplete: false };
    setToDoList((prev) => [...prev, newToDo]);
    successToastMessage();
    inputRef.current.value = "";
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
    <div className="bg-teal-100 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-lg">
      {/* Title */}
      <div className="flex items-center mt-7 gap-2">
        <FontAwesomeIcon icon={faList} className="text-blue-500 text-2xl" />
        <h1 className="text-3xl font-semibold flex-1">To-Do List</h1>
      </div>

      {/* Input Box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full p-2 shadow-md">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer hover:bg-orange-500 transition-all"
        >
          ADD +
        </button>
        <ToastContainer />
      </div>

      {/* To-Do Items */}
      <div className="max-h-64 overflow-y-auto w-full pr-1 custom-scrollbar">
        {toDoList.map((item) => (
          <TodoItems
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteToDo={deleteToDo}
            toggle={toggle}
          />
        ))}
      </div>
    </div>
  );
};

export default Todo;
