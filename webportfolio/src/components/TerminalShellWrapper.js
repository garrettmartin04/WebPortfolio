export default function TerminalShellWrapper({ children, path = "" }) {
return (
<div className="panel text-emerald-200 font-mono mx-auto mt-10 max-w-5xl relative z-10">
{/* Title */}
<div className="flex items-center justify-between bg-zinc-950/70 rounded-t-xl px-4 py-2 border-b border-emerald-700/30">
<div className="flex items-center gap-2">
<span className="win-dot dot-red" />
<span className="win-dot dot-yellow" />
<span className="win-dot dot-green" />
</div>
<div className="text-xs sm:text-sm tracking-wide text-emerald-300/80 select-none">
C:\\Users\\Garrett{path}&gt;
</div>
<div className="text-xs text-emerald-400/60 hidden sm:block">terminal</div>
</div>


{/* conent */}
<div className="px-5 sm:px-7 py-6 leading-relaxed">
{children}
</div>
</div>
);
}