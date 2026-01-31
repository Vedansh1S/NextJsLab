"use client";

import { useState } from "react";
import { Check, Pencil, Trash2, X } from "lucide-react";

export default function Notes() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos((prev) => [...prev, text.trim()]);
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
    setTodos((prev) =>
      prev.map((todo, i) => (i === index ? editText.trim() : todo))
    );
    setEditingIndex(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setEditText("");
  };

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Ambient glow */}

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-xl">
        <div className="p-6">
          <h1 className="mb-5 text-lg font-semibold tracking-wide text-white">
            Notes
          </h1>

          {/* Input */}
          <div className="flex gap-2">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTodo()}
              placeholder="Write a thought…"
              className="flex-1 rounded-xl bg-black/50 px-4 py-2 text-sm text-white ring-1 ring-white/10 transition outline-none placeholder:text-white/40 focus:ring-indigo-500"
            />
            <button
              onClick={addTodo}
              className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-400 active:scale-95"
            >
              Add
            </button>
          </div>

          {/* Notes */}
          <ul className="mt-6 space-y-3">
            {todos.length === 0 && (
              <li className="rounded-xl border border-dashed border-white/10 bg-white/5 p-4 text-center text-sm text-white/40">
                No notes yet.
                <span className="block text-xs text-white/30">
                  Start typing above ✨
                </span>
              </li>
            )}

            {todos.map((todo, i) => (
              <li
                key={i}
                className="group rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90 transition hover:bg-white/10"
              >
                {editingIndex === i ? (
                  <div className="flex items-center gap-2">
                    <input
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") saveEdit(i);
                        if (e.key === "Escape") cancelEdit();
                      }}
                      autoFocus
                      className="flex-1 rounded-lg bg-black/50 px-3 py-1.5 text-white ring-1 ring-white/10 outline-none focus:ring-indigo-500"
                    />
                    <button
                      onClick={() => saveEdit(i)}
                      className="rounded-lg p-2 text-white transition hover:bg-white/10"
                    >
                      <Check size={18} />
                    </button>
                    <button
                      onClick={cancelEdit}
                      className="rounded-lg p-2 text-white transition hover:bg-white/10"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-3">
                    <span className="leading-relaxed">{todo}</span>
                    <div className="flex gap-1 opacity-0 transition group-hover:opacity-100">
                      <button
                        onClick={() => startEdit(i, todo)}
                        className="rounded-lg p-2 text-white transition hover:bg-white/10"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => deleteTodo(i)}
                        className="rounded-lg p-2 text-white transition hover:bg-white/10"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
