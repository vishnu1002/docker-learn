export default function NotePad() {
  return (
    <div className="font-jetbrains">
      <div className="h-screen w-full bg-[#E8C999] flex items-center justify-center">
        <div className="flex flex-col w-full h-full justify-center items-center">
          <textarea
            className="w-[50%] h-[100px] p-4 focus:outline-none border-b border-black rounded-lg text-black text-[24px]"
            placeholder="your note..."
            style={{ fontFamily: "JetBrainsMono-Regular, monospace" }}
          />
        </div>
      </div>
    </div>
  );
}
