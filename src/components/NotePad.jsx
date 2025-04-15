export default function NotePad() {
  return (
    <div className="h-screen w-full bg-[#E8C999] flex items-center justify-center">
      <div className="flex flex-col w-full h-full justify-center items-center">
        <textarea
          className="w-[60%] h-[100px] p-4 border-b border-black focus:outline-none bg-transparent rounded-lg text-black text-2xl font-mono placeholder:text-black/40"
          placeholder="your note..."
        />
        <button className="mt-4 px-4 py-2 border border-black rounded hover:bg-red-500 hover:text-white transition-all duration-100 active:scale-95 active:translate-y-0.1">
          Save Note
        </button>
      </div>
    </div>
  );
}
