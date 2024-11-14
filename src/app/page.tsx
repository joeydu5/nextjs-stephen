import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((each) => {
    return <div key={each.id}>{each.title}</div>;
  });
  return <div>{renderSnippets}</div>;
}
