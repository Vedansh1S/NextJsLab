import { revalidatePath } from "next/cache";

let notes: string[] = [];

async function addNote(formData: FormData) {
  "use server";
  const note = formData.get("note")?.toString().trim();
  if (!note) return;

  notes.push(note);
  revalidatePath("/");
}

async function deleteNote(index: number) {
  "use server";
  notes.splice(index, 1);
  revalidatePath("/");
}

export default function Page() {
  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Notes</h1>

      <form action={addNote} className="flex gap-2 mb-6">
        <input
          name="note"
          placeholder="Write a note..."
          className="flex-1 px-3 py-2 rounded bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500">
          Add
        </button>
      </form>

      <ul className="space-y-2">
        {notes.map((note, i) => (
          <li
            key={i}
            className="flex justify-between items-center bg-zinc-800 px-3 py-2 rounded"
          >
            <span>{note}</span>
            <form action={deleteNote.bind(null, i)}>
              <button className="text-sm text-red-400 hover:text-red-300">
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </main>
  );
}
