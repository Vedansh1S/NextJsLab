import { revalidatePath } from "next/cache";
import { randomUUID } from "crypto";

// 1. Improved Data Structure
// Using objects with IDs is much better for React rendering than plain strings
type Note = {
  id: string;
  text: string;
  createdAt: string;
};

// Note: In a real app, this should be a database.
// This will reset every time the server restarts.
let notes: Note[] = [];

async function addNote(formData: FormData) {
  "use server";
  const text = formData.get("note")?.toString().trim();
  if (!text) return;

  const newNote: Note = {
    id: randomUUID(),
    text,
    createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  notes.push(newNote);
  revalidatePath("/");
}

async function deleteNote(id: string) {
  "use server";
  notes = notes.filter((note) => note.id !== id);
  revalidatePath("/");
}

export default function Page() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center p-4">
      <main className="w-full max-w-lg">
        
        {/* Header Section */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold tracking-tight bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Quick Notes
          </h1>
          <p className="text-zinc-500 mt-2 text-sm">
            Capture your ideas instantly.
          </p>
        </div>

        {/* Input Card */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-2 shadow-xl backdrop-blur-sm mb-6">
          <form action={addNote} className="flex gap-2">
            <input
              name="note"
              required
              autoComplete="off"
              placeholder="What's on your mind?"
              className="flex-1 px-4 py-3 rounded-lg bg-transparent border-none text-sm placeholder:text-zinc-600 focus:outline-none focus:bg-zinc-800/50 transition-colors text-white"
            />
            <button 
              className="bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-lg transition-all active:scale-95 shadow-lg shadow-indigo-900/20"
              aria-label="Add Note"
            >
              {/* Plus Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </form>
        </div>

        {/* Notes List */}
        <ul className="space-y-3">
          {notes.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-zinc-900 rounded-xl">
              <p className="text-zinc-600 text-sm">No notes yet. Add one above!</p>
            </div>
          ) : (
            notes.map((note) => (
              <li
                key={note.id}
                className="group flex justify-between items-start bg-zinc-900 border border-zinc-800 hover:border-zinc-700 p-4 rounded-xl transition-all hover:shadow-md"
              >
                <div className="flex flex-col gap-1 pr-4">
                  <span className="text-zinc-200 break-all leading-relaxed">{note.text}</span>
                  <span className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">
                    {note.createdAt}
                  </span>
                </div>

                <form action={deleteNote.bind(null, note.id)}>
                  <button 
                    className="text-zinc-600 hover:text-red-400 p-1.5 rounded-md hover:bg-red-400/10 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
                    aria-label="Delete note"
                  >
                    {/* Trash Icon */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                  </button>
                </form>
              </li>
            ))
          )}
        </ul>
      </main>
    </div>
  );
}