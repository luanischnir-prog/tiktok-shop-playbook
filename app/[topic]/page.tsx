import { notFound } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { TopicView } from "@/components/TopicView";
import { getEntriesByTopic } from "@/data/entries";
import { getTopic, TOPICS } from "@/lib/topics";

export function generateStaticParams() {
  return TOPICS.map((t) => ({ topic: t.slug }));
}

interface Props {
  params: Promise<{ topic: string }>;
}

export default async function TopicPage({ params }: Props) {
  const { topic: topicSlug } = await params;
  const topic = getTopic(topicSlug);
  if (!topic) notFound();

  const entries = getEntriesByTopic(topicSlug);

  return (
    <div className="flex min-h-screen">
      <Sidebar activeSlug={topicSlug} />
      <TopicView
        entries={entries}
        topicLabel={topic.label}
        topicColor={topic.color}
      />
    </div>
  );
}
