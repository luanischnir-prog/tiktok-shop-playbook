import Link from "next/link";
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

function getSummary(body: string, maxLen = 120): string {
  const firstLine = body.split("\n")[0].trim();
  if (firstLine.length <= maxLen) return firstLine;
  return firstLine.slice(0, maxLen).trimEnd() + "…";
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

      <p className="text-sm text-zinc-400 leading-relaxed">{getSummary(entry.body)}</p>

      <div className="flex items-center justify-between mt-auto pt-1">
        <p className="text-xs text-zinc-600">{formatDate(entry.createdAt)}</p>
        <Link
          href={`/${entry.topic}/${entry.id}`}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          style={{ backgroundColor: color + "33", color }}
        >
          Ver más →
        </Link>
      </div>
    </div>
  );
}
