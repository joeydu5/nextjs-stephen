"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export const editSnippet = async (id: number, code: string) => {
  // console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
};

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // // this needs to be a server ction
  // "use server";
  try {
    // check the user's inputs and make sure they are valid
    const title = formData.get("title");
    const code = formData.get("code");
    if (typeof title !== "string" || title.length < 3) {
      return { message: "title should be longer!" };
    }

    if (typeof code !== "string" || code.length < 5) {
      return { message: "code should be longer!" };
    }

    // throw Error("Failed to save to Database.");
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log("snippet", snippet);
  } catch (err: unknown) {
    if (err instanceof Error) {
      return { message: err.message };
    } else {
      return {
        message: "something is wrong, please check!",
      };
    }
  }
  // redirect user back to the root route
  redirect("/");
}
