import { notFound } from "next/navigation";
import Link from "next/link";
import { Sidebar } from "@/components/Sidebar";
import { getEntryById, getAllEntries } from "@/data/entries";
import { getTopic, TOPICS } from "@/lib/topics";

export function generateStaticParams() {
  return getAllEntries().map((e) => ({ topic: e.topic, id: e.id }));
}

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

interface Props {
  params: Promise<{ topic: string; id: string }>;
}

export default async function EntryPage({ params }: Props) {
  const { topic: topicSlug, id } = await params;
  const topic = getTopic(topicSlug);
  if (!topic) notFound();

  const entry = getEntryById(id);
  if (!entry || entry.topic !== topicSlug) notFound();

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSlug={topicSlug} />

      <div className="flex-1 min-h-screen bg-zinc-950 px-8 py-8">
        <Link
          href={`/${topicSlug}`}
          className="inline-flex items-center gap-1.5 text-sm text-zinc-500 hover:text-white transition-colors mb-6"
        >
          ← Volver a {topic.label}
        </Link>

        <div
          className="bg-zinc-900 rounded-xl border border-zinc-800 border-l-4 p-8 max-w-3xl"
          style={{ borderLeftColor: topic.color }}
        >
          <div className="flex items-center gap-3 mb-4">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full ${TYPE_COLORS[entry.type] ?? "bg-zinc-700 text-zinc-200"}`}
            >
              {TYPE_LABELS[entry.type] ?? entry.type}
            </span>
            <span className="text-xs text-zinc-600">{formatDate(entry.createdAt)}</span>
          </div>

          <h1 className="text-2xl font-bold text-white leading-snug mb-6">{entry.title}</h1>

          <p className="text-sm text-zinc-300 whitespace-pre-wrap leading-relaxed">{entry.body}</p>
        </div>
      </div>
    </div>
  );
}
