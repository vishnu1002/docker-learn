import { useState, useEffect } from "react";
import SavedNote from "./SavedNote";

export default function NotePad() {
  const [noteContent, setNoteContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [notes, setNotes] = useState([]);

  // Fetch notes when component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/notes");
      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }
      const data = await response.json();
      setNotes(data);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSaveNote = async () => {
    if (!noteContent.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: noteContent }),
      });

      if (!response.ok) {
        throw new Error("Failed to save note");
      }

      // Clear the textarea and refresh notes
      setNoteContent("");
      fetchNotes();
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/notes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete note");
      }

      // Refresh notes after deletion
      fetchNotes();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#E8C999] p-8">
      <div className="max-w-7xl mx-auto">
        {/* Input Section */}
        <div className="mb-8">
          <textarea
            className="w-full h-[100px] p-4 border-b border-black focus:outline-none bg-transparent rounded-lg text-black text-2xl font-mono placeholder:text-black/40"
            placeholder="your note..."
            value={noteContent}
            onChange={(e) => setNoteContent(e.target.value)}
          />
          <button
            className={`font-mono mt-4 px-4 py-2 border border-black rounded-lg hover:bg-red-500 hover:text-white transition-all duration-100 active:scale-95 active:translate-y-0.1 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSaveNote}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save Note"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Simple Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {notes.map((note) => (
            <SavedNote
              key={note._id}
              content={note.content}
              onDelete={() => handleDeleteNote(note._id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
