"use client";

import { useState } from "react";
import type { Entry } from "@/data/entries";
import { EntryCard } from "./EntryCard";

interface Props {
  entries: Entry[];
  topicLabel: string;
  topicColor: string;
}

export function TopicView({ entries, topicLabel, topicColor }: Props) {
  const [search, setSearch] = useState("");

  const filtered = search.trim()
    ? entries.filter(
        (e) =>
          e.title.toLowerCase().includes(search.toLowerCase()) ||
          e.body.toLowerCase().includes(search.toLowerCase())
      )
    : entries;

  return (
    <div className="flex-1 min-h-screen bg-zinc-950 px-8 py-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">{topicLabel}</h2>
        <p className="text-sm text-zinc-500 mt-0.5">
          {entries.length} {entries.length === 1 ? "entrada" : "entradas"}
        </p>
      </div>

      <div className="relative mb-6">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          placeholder="Buscar por título o contenido…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-900 text-white placeholder-zinc-600 rounded-xl pl-10 pr-10 py-2.5 text-sm border border-zinc-800 outline-none focus:border-zinc-600 transition-colors"
        />
        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white text-lg leading-none"
          >
            ×
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-zinc-600">
          <p>Sin resultados para &ldquo;{search}&rdquo;</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filtered.map((entry) => (
            <EntryCard key={entry.id} entry={entry} color={topicColor} />
          ))}
        </div>
      )}

      {search && filtered.length > 0 && (
        <p className="mt-4 text-xs text-zinc-600">
          {filtered.length} resultado{filtered.length !== 1 ? "s" : ""} para &ldquo;{search}&rdquo;
        </p>
      )}
    </div>
  );
}
