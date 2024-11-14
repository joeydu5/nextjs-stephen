import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";

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
  return (
    <div>
      <div>
        {snippet.id} ~~~ {snippet.title} ~~~ {snippet.code}
      </div>
    </div>
  );
}

export default SnippetShowSingle;
