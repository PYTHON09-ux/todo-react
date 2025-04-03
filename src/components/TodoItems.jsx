import React from "react";
import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import delete_icon from "../assets/delete.png";

const TodoItems = ({ text, id, isComplete, deleteToDo, toggle }) => {
  return (
    <div className="bg-white flex items-center my-3 gap-2 p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <div
        onClick={() => toggle(id)}
        className="flex flex-row flex-1 items-center cursor-pointer"
      >
        <img src={isComplete ? tick : not_tick} alt="" className="w-7" />
        <p
          className={`text-slate-700 ml-4 text-[17px] break-words ${
            isComplete ? "line-through decoration-slate-500" : ""
          }`}
        >
          {text}
        </p>
      </div>
      <img
        onClick={() => deleteToDo(id)}
        src={delete_icon}
        alt="Delete"
        className="w-4 cursor-pointer transition-transform transform hover:scale-110"
      />
    </div>
  );
};

export default TodoItems;
