import React from "react";
export default function More_Checkbox() {
  return (
    <>
      <input
        content="✖"
        type="checkbox"
        className="relative flex h-9 w-9 appearance-none items-center justify-center text-4xl before:absolute before:h-max before:w-max before:-rotate-45 before:cursor-pointer before:px-4 before:py-2 before:duration-200 before:content-[attr(content)] checked:before:rotate-0 checked:before:text-secundary-400"
      />
    </>
  );
}
