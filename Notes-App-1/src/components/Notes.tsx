"use client";

import { useState } from "react";
import { Pencil, Trash2, Check, X } from "lucide-react";

export default function Notes() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos((prev) => [...prev, text]);
    setText("");
  };

  const deleteTodo = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const startEdit = (index: number, todo: string) => {
    setEditingIndex(index);
    setEditText(todo);
  };

  const saveEdit = (index: number) => {
    if (!editText.trim()) return;
    setTodos((prev) => prev.map((todo, i) => (i === index ? editText : todo)));
    setEditingIndex(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditText("");
  };

  return (
    <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
      {/* Content */}
      <div className="relative p-6">
        <h1 className="mb-4 text-xl font-semibold tracking-wide text-white">
          Todos
        </h1>

        <div className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTodo();
              }
            }}
            placeholder="Add a task..."
            className="flex-1 rounded-lg bg-black/40 px-3 py-2 text-white placeholder:text-white/40 outline-none ring-1 ring-white/10 focus:ring-indigo-500"
          />
          <button
            onClick={addTodo}
            title="Add a new task"
            className="rounded-lg bg-indigo-500 px-4 py-2 font-medium text-white hover:bg-indigo-400 active:scale-95 transition"
          >
            Add
          </button>
        </div>

        <ul className="mt-5 space-y-2">
          {todos.map((todo, i) => (
            <li
              key={i}
              className="rounded-lg bg-white/10 px-3 py-2 text-sm text-white/90 ring-1 ring-white/10 hover:bg-white/15 transition flex justify-between items-center"
            >
              {editingIndex === i ? (
                <div className="flex gap-2 w-full">
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveEdit(i);
                      } else if (e.key === "Escape") {
                        cancelEdit();
                      }
                    }}
                    className="flex-1 rounded bg-black/40 px-2 py-1 text-white outline-none ring-1 ring-white/10 focus:ring-indigo-500"
                    autoFocus
                  />
                  <button
                    onClick={() => saveEdit(i)}
                    title="Save changes"
                    className="rounded bg-transparent p-2 text-xs font-medium text-white hover:bg-white/10 transition"
                  >
                    <Check size={18} />
                  </button>
                  <button
                    onClick={cancelEdit}
                    title="Cancel editing"
                    className="rounded bg-transparent p-2 text-xs font-medium text-white hover:bg-white/10 transition"
                  >
                    <X size={18} />
                  </button>
                </div>
              ) : (
                <>
                  <span>{todo}</span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEdit(i, todo)}
                      title="Edit this task"
                      className="rounded bg-transparent p-2 text-xs font-medium text-white hover:bg-white/10 transition"
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      onClick={() => deleteTodo(i)}
                      title="Delete this task"
                      className="rounded bg-transparent p-2 text-xs font-medium text-white hover:bg-white/10 transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
