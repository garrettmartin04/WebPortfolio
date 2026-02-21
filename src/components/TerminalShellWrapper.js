export default function TerminalShellWrapper({ children, path = "" }) {
  const now = new Date();
  const time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="panel text-emerald-200 font-mono mx-auto mt-10 max-w-5xl relative z-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,.15),transparent_35%),radial-gradient(circle_at_80%_100%,rgba(52,211,153,.15),transparent_45%)]" />

      <div className="flex items-center justify-between bg-zinc-950/70 rounded-t-xl px-4 py-2 border-b border-emerald-700/30 relative z-10">
        <div className="flex items-center gap-2">
          <span className="win-dot dot-red" />
          <span className="win-dot dot-yellow" />
          <span className="win-dot dot-green" />
        </div>
        <div className="text-xs sm:text-sm tracking-wide text-emerald-300/80 select-none">C:\\Users\\Garrett{path}&gt;</div>
        <div className="text-xs text-emerald-400/60 hidden sm:block">{time} local</div>
      </div>

      <div className="px-5 sm:px-7 py-6 leading-relaxed relative z-10">{children}</div>
    </div>
  );
}
