export default function LoadingSpinner() {
  return (
    <div className="flex justify-center gap-4 items-center h-loader bg-white relative">
      <div className="animate-rotate-infinite border-t border-violet-950 w-40 h-40 bg-transparent rounded-full absolute"></div>
      <div className="h-2 w-2 bg-purple-800 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-violet-800 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-6 w-6 bg-indigo-800 rounded-full animate-bounce"></div>
    </div>
  );
}
