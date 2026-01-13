import { revalidatePath } from "next/cache";
import { randomUUID } from "crypto";
import { ThemeToggle } from "@/components/ThemeToggle"; 

type Note = { id: string; text: string; createdAt: string; };

// In-memory DB (resets on server restart)
let notes: Note[] = [];

async function addNote(formData: FormData) {
  "use server";
  const text = formData.get("note")?.toString().trim();
  if (!text) return;
  notes.push({
    id: randomUUID(),
    text,
    createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  revalidatePath("/");
}

async function deleteNote(id: string) {
  "use server";
  notes = notes.filter((note) => note.id !== id);
  revalidatePath("/");
}

export default function Page() {
  return (
    // Main container needs relative and overflow-hidden to contain the light ray
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      
      {/* --- THE RAY OF LIGHT --- */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
         {/* The Beam: Rotated, heavily blurred, gradient from corner */}
        <div className="absolute -top-[20%] -left-[20%] w-[80%] h-[150%] 
          bg-linear-to-br from-amber-300/30 via-orange-100/5 to-transparent
          dark:from-indigo-500/30 dark:via-purple-500/5 dark:to-transparent
          blur-[100px] rotate-45 transform-gpu" 
        />
      </div>

      {/* Theme Toggle Positioned Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <main className="w-full max-w-lg z-10 relative">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-black tracking-tighter bg-linear-to-r from-zinc-900 to-zinc-500 dark:from-indigo-200 dark:to-cyan-200 bg-clip-text text-transparent pb-2">
            Quick Notes
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium">
            Capture ideas in the light.
          </p>
        </div>

        {/* Glassmorphism Input Card */}
        <div className="bg-white/40 dark:bg-zinc-900/40 border border-white/50 dark:border-zinc-700/50 rounded-2xl p-2 shadow-xl backdrop-blur-xl mb-8">
          <form action={addNote} className="flex gap-2">
            <input
              name="note"
              required
              autoComplete="off"
              placeholder="Write something..."
              className="flex-1 px-4 py-3 bg-transparent border-none outline-none text-zinc-800 dark:text-zinc-100 placeholder:text-zinc-500"
            />
            <button className="bg-zinc-900 dark:bg-indigo-500 text-white p-3 rounded-xl hover:scale-105 transition-transform shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>
          </form>
        </div>

        {/* List */}
        <ul className="space-y-3">
          {notes.length === 0 ? (
            <div className="text-center py-10 opacity-40">
              <p>No notes yet.</p>
            </div>
          ) : (
            notes.map((note) => (
              <li key={note.id} className="group flex justify-between items-start bg-white/60 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/50 p-4 rounded-xl backdrop-blur-sm transition-all hover:scale-[1.02]">
                <div>
                  <p className="text-zinc-800 dark:text-zinc-200 font-medium">{note.text}</p>
                  <p className="text-xs text-zinc-400 mt-1">{note.createdAt}</p>
                </div>
                <form action={deleteNote.bind(null, note.id)}>
                  <button className="text-zinc-400 hover:text-red-500 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
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