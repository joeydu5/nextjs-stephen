"use client";
import React from "react";
import { deleteSnippet } from "@/actions";

interface btnDelProps {
  id: number;
}

const ButtonDelete = ({ id }: btnDelProps) => {
  return (
    <button
      className="border rounded border-grey-400 ml-2 p-1"
      onClick={() => {
        deleteSnippet(id);
      }}
    >
      Delete
    </button>
  );
};

export default ButtonDelete;
