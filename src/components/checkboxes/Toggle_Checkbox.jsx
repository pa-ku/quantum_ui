import React from "react";

export default function ToggleBtn() {
  return (
    <>
      <input
        type="checkbox"
        className="before:contets-['asd'] relative flex h-6 w-12 cursor-pointer appearance-none items-center rounded-xl bg-white before:absolute before:h-4 before:w-4 before:translate-x-1 before:rounded-xl before:bg-primary-500 before:duration-200 
duration-200
        checked:before:translate-x-7
        checked:bg-primary-300
        checked:before:bg-white
        checked:shadow-center
        checked:shadow-primary-700
        before:pointer-events-none
        
        "
      />
    </>
  );
}
