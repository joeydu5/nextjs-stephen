"use client";
import { createSnippet } from "@/actions";
import { useActionState } from "react";

function SnippetCreatePage() {
  const [state, action, isPending] = useActionState(createSnippet, {
    message: "",
  });
  return (
    <div>
      <form action={action}>
        <h3 className="font-bold m-3">Create a Snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label htmlFor="title" className="w-12">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="flex gap-4">
            <label htmlFor="code" className="w-12">
              Code
            </label>
            <textarea
              name="code"
              id="code"
              className="border rounded p-2 w-full"
            />
          </div>
          <button
            disabled={isPending}
            type="submit"
            className="rounded p-2 bg-blue-200"
          >
            Create
          </button>
          {state.message ? (
            <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
              {state.message}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}

export default SnippetCreatePage;
