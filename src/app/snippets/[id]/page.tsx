import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import { deleteSnippet } from "@/actions";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}

async function SnippetShowSingle(props: SnippetShowPageProps) {
  //   const params = await props.params;
  //   const id = await params.id;
  await new Promise((r) => {
    setTimeout(r, 2000);
  });
  const { id } = await props.params;
  console.log("id", id);
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  });
  if (!snippet) {
    return notFound();
  }

  const deleteSnippetAction = deleteSnippet.bind(null, parseInt(id));

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div>
          <Link href={`/snippets/${id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className="p-2 border rounded" type="submit">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export default SnippetShowSingle;

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((each) => {
    return {
      id: each.id.toString(),
    };
  });
}
