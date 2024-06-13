import React from "react";

export default function ThemeCheckbox() {
  return (
    <>
      <input type="checkbox" className="
      relative
      flex
      items-center
      justify-center
      before:absolute
      before:w-10
      before:h-5
      before:content['Checkbox']
      before:rounded-xl
      before:border-2
      before:bg-white
      b-white
      before:cursor-pointer 
      checked:before:bg-red-200
      "  
      />
    </>
  );
}
