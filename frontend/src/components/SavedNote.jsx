import { useRef, useEffect, useState } from "react";

export default function SavedNote({ content, onDelete }) {
  const contentRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkScrollable = () => {
      if (contentRef.current) {
        const { scrollHeight, clientHeight } = contentRef.current;
        setIsScrollable(scrollHeight > clientHeight);
      }
    };

    checkScrollable();
    window.addEventListener("resize", checkScrollable);

    return () => {
      window.removeEventListener("resize", checkScrollable);
    };
  }, [content]);

  return (
    <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-black/20 w-full h-[180px] flex flex-col relative">
      <div
        className="flex-grow overflow-y-auto scrollbar-hide"
        ref={contentRef}
      >
        {isScrollable && (
          <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[#EACFA3] to-transparent pointer-events-none rounded-b-lg"></div>
        )}
        <p className="text-black font-mono text-sm break-words pb-6">
          {content}
        </p>
      </div>

      <div className="absolute bottom-2 right-2 z-10">
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-700 transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 1.5v1H3a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-5v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1m-4.077 6h16.154l-.943 12.722A3 3 0 0 1 16.143 23H7.857a3 3 0 0 1-2.992-2.778z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
