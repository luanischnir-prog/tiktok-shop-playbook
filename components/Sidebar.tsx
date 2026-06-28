import Link from "next/link";
import { TOPICS } from "@/lib/topics";
import { getCountsByTopic } from "@/data/entries";

export function Sidebar({ activeSlug }: { activeSlug?: string }) {
  const countMap = getCountsByTopic();
  const total = Object.values(countMap).reduce((a, b) => a + b, 0);

  return (
    <aside className="w-64 shrink-0 bg-zinc-950 min-h-screen border-r border-zinc-800 flex flex-col">
      <div className="px-6 py-6 border-b border-zinc-800">
        <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-1">TikTok Shop</p>
        <h1 className="text-xl font-bold text-white">Playbook</h1>
      </div>

      <nav className="flex-1 py-4 space-y-1 px-3">
        {TOPICS.map((topic) => {
          const active = topic.slug === activeSlug;
          const count = countMap[topic.slug] ?? 0;
          return (
            <Link
              key={topic.slug}
              href={`/${topic.slug}`}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                active
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
              style={active ? { backgroundColor: topic.color + "22", color: topic.color } : {}}
            >
              <span className="flex items-center gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: active ? topic.color : "transparent" }}
                />
                {topic.label}
              </span>
              <span
                className="text-xs px-1.5 py-0.5 rounded-full font-mono"
                style={
                  active
                    ? { backgroundColor: topic.color, color: "#fff" }
                    : { backgroundColor: "#27272a", color: "#71717a" }
                }
              >
                {count}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="px-6 py-4 border-t border-zinc-800">
        <p className="text-xs text-zinc-600">{total} entradas totales</p>
      </div>
    </aside>
  );
}
