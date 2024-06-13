import React from "react";

export default function TextCheckbox() {
  return (
    <>
      <input
        content="Checkbox"
        type="checkbox"
        className="relative flex w-max items-center justify-center before:absolute before:left-0 before:right-0 before:h-max before:w-max before:cursor-pointer before:rounded-xl before:bg-gray-500 before:px-4 before:py-2 before:content-[attr(content)] checked:before:bg-green-200 checked:before:text-[var(--primary-900)] checked:before:shadow-md checked:before:shadow-green-900"
      />
    </>
  );
}
