import React from "react";

export default function TextCheckbox() {
  return (
    <>
      <input
        content="Checkbox"
        type="checkbox"
        className="checked:before:bg-primary-100 relative h-10 w-max appearance-none bg-green-50 font-bold before:absolute before:w-max before:cursor-pointer before:rounded-xl before:bg-gray-500 before:px-4 before:py-2 before:content-[attr(content)] checked:before:text-[var(--primary-900)]"
      />
    </>
  );
}
