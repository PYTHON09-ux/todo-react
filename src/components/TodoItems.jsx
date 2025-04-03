import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteToDo, toggle }) => {
  return (
    <div className={`flex items-center my-2 gap-2 p-2.5 sm:p-3 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md ${
      isComplete ? "bg-green-50 border-l-4 border-green-400" : "bg-white/90 border-l-4 border-indigo-400"
    }`}>
      <div
        onClick={() => toggle(id)}
        className="flex flex-row flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="" className="w-5 sm:w-6" />
        <p
          className={`ml-2 sm:ml-3 text-sm sm:text-[15px] break-words ${
            isComplete 
              ? "line-through decoration-green-500 text-green-700" 
              : "text-indigo-700"
          }`}
        >
          {text}
        </p>
      </div>
      <div 
        onClick={() => deleteToDo(id)}
        className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-100 transition-all cursor-pointer group"
      >
        <img
          src={delete_icon}
          alt="Delete"
          className="w-3 sm:w-3.5 transition-transform transform group-hover:scale-110 group-hover:rotate-12"
        />
      </div>
    </div>
  );
};

export default TodoItems;