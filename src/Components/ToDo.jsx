import React, { useState } from "react";
import { MdDelete, MdCheck } from "react-icons/md";

const ToDo = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Avoid duplicate data
    if (data.some((value) => value.text === input.trim())) {
      setInput("");
      return;
    }

    setData([...data, { text: input.trim(), done: false }]);
    setInput("");
  };

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const handleDone = (index) => {
    const updated = [...data];
    updated[index].done = !updated[index].done;
    setData(updated);
  };

  return (
    <div className="bg-gray-700 text-white p-4 rounded-xl shadow-lg w-[90%] max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

      <form onSubmit={handleAdd} className="flex mb-4">
        <input
          type="text"
          placeholder="Create your data"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded text-[#212121] bg-white"
        />
        <button type="submit" className="ml-2 p-2 bg-green-600 rounded hover:opacity-85">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {data.map((value, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-600 p-2 rounded">
            <span className={value.done ? "line-through text-green-300" : ""}>
              {value.text}
            </span>
            <div className="flex space-x-2">
              <button onClick={() => handleDone(index)} className="text-green-400">
                <MdCheck />
              </button>
              <button onClick={() => handleDelete(index)} className="text-red-400">
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo;
