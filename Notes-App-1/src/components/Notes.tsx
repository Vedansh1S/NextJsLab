"use client";

import { useState } from "react";

export default function Notes() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos(prev => [...prev, text]);
    setText("");
  };

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
      
      {/* Light ray */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-light" />
      </div>

      {/* Content */}
      <div className="relative p-6">
        <h1 className="mb-4 text-xl font-semibold tracking-wide text-white">
          Todos
        </h1>

        <div className="flex gap-2">
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Add a task..."
            className="flex-1 rounded-lg bg-black/40 px-3 py-2 text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-indigo-500"
          />
          <button
            onClick={addTodo}
            className="rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-400 active:scale-95 transition"
          >
            Add
          </button>
        </div>

        <ul className="mt-5 space-y-2">
          {todos.map((todo, i) => (
            <li
              key={i}
              className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white/90 ring-1 ring-white/10 hover:bg-white/15 transition"
            >
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
