export default function TerminalShellWrapper({ children, path = "" }) {
  return (
    <div className="bg-black text-green-400 font-mono p-6 md:p-8 rounded-lg shadow-xl max-w-4xl mx-auto mt-10 leading-relaxed">
      <div className="bg-gray-900 h-6 flex items-center px-4 mb-4 rounded-t-lg">
        <span className="text-green-400 font-semibold select-none">
          C:\Users\Garrett{path}&gt;
        </span>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}
