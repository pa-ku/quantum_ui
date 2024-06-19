import React from "react";

export default function MinimalInput() {
  return (
    <input
      type="text"
      className="rounded-xl border-white bg-gray-800 px-4 py-1 py-2 text-white outline-none placeholder:text-gray-200 focus:bg-gray-800"
      placeholder="Input"
    />
  );
}
