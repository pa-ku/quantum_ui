import React from "react";

export default function TextCheckbox() {
  return (
    <>
      <input
        content="Checkbox"
        type="checkbox"
        className="relative h-10 w-max appearance-none bg-green-50 before:absolute before:w-max before:cursor-pointer before:rounded-xl before:bg-gray-500 before:px-4 before:py-2 before:content-[attr(content)] checked:before:bg-green-200 checked:before:text-[var(--primary-900)]"
      />
    </>
  );
}
