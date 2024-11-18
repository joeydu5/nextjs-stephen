import { db } from "@/db";
import Link from "next/link";
import ButtonDelete from "@/components/button-delete";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderSnippets = snippets.map((each) => {
    return (
      <div key={each.id}>
        {each.title}
        <Link href={`/snippets/${each.id}`}>
          <button className="border rounded-red-200 p-1 ml-3 my-2">View</button>
        </Link>
        <ButtonDelete id={each.id} />
      </div>
    );
  });
  return <div>{renderSnippets}</div>;
}
