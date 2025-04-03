import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteToDo, toggle }) => {
  return (
    <div className={`flex items-center my-3 gap-2 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg ${
      isComplete ? "bg-green-50 border-l-4 border-green-400" : "bg-white/90 border-l-4 border-indigo-400"
    }`}>
      <div
        onClick={() => toggle(id)}
        className="flex flex-row flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        <p
          className={`ml-4 text-[17px] break-words ${
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
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-100 transition-all cursor-pointer group"
      >
        <img
          src={delete_icon}
          alt="Delete"
          className="w-4 transition-transform transform group-hover:scale-110 group-hover:rotate-12"
        />
      </div>
    </div>
  );
};

export default TodoItems;