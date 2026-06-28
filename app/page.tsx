import { redirect } from "next/navigation";
import { TOPICS } from "@/lib/topics";

export default function Home() {
  redirect(`/${TOPICS[0].slug}`);
}
