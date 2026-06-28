import type { Entry } from "@/data/entries";

const TYPE_LABELS: Record<string, string> = {
  note: "Nota",
  script: "Script",
  data: "Data",
  idea: "Idea",
};

const TYPE_COLORS: Record<string, string> = {
  note: "bg-zinc-700 text-zinc-200",
  script: "bg-blue-900/60 text-blue-300",
  data: "bg-emerald-900/60 text-emerald-300",
  idea: "bg-purple-900/60 text-purple-300",
};

function formatDate(d: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(d));
}

export function EntryCard({ entry, color }: { entry: Entry; color: string }) {
  return (
    <div
      className="bg-zinc-900 rounded-xl border border-zinc-800 border-l-4 p-5 flex flex-col gap-3 hover:border-zinc-700 transition-colors"
      style={{ borderLeftColor: color }}
    >
      <span
        className={`self-start text-xs font-semibold px-2 py-0.5 rounded-full ${TYPE_COLORS[entry.type] ?? "bg-zinc-700 text-zinc-200"}`}
      >
        {TYPE_LABELS[entry.type] ?? entry.type}
      </span>

      <h3 className="font-semibold text-white text-base leading-snug">{entry.title}</h3>

      <p className="text-sm text-zinc-400 whitespace-pre-wrap leading-relaxed">{entry.body}</p>

      <p className="text-xs text-zinc-600 mt-auto pt-1">{formatDate(entry.createdAt)}</p>
    </div>
  );
}
