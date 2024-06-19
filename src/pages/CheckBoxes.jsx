import React from "react";
import ThemeCheckbox from "../components/checkboxes/ThemeCheckbox";
import TextCheckbox from "../components/checkboxes/TextCheckbox";

import ToggleBtn from "../components/checkboxes/ToggleBtn";
import Heart_Checkbox from "../components/checkboxes/Heart_Checkbox";
import More_Checkbox from "../components/checkboxes/More_Checkbox";
import ComponentTemplate from "../components/ComponentTemplate";

export default function CheckBoxes() {
  return (
    <>
      <div className="wrapper">
        <div className="flex w-full flex-col items-center gap-2">
          <h2 className="font-bold">About</h2>
          <p className="max-w-[50rem] text-center text-xl">
            All the inputs uses the Type Checkbox,hidding the default style with
            ::before. Mantaining all the benefits from the vanilla input
          </p>
        </div>
        <ComponentTemplate
          title={"More Button"}
          text={"Used for clossing tags, or expansive containers"}
        >
          <More_Checkbox />
        </ComponentTemplate>
        <ComponentTemplate
          title={"Favorite"}
          text={"Minimalistic Add to favourites Button"}
        >
          <Heart_Checkbox />
        </ComponentTemplate>
        <ComponentTemplate title={"Active"}>
          <TextCheckbox />
        </ComponentTemplate>
        <ComponentTemplate
          title={"Theme"}
          text={"Advanced toggle theme just Css"}
        >
          <ThemeCheckbox />
        </ComponentTemplate>
        <ComponentTemplate title={"Toggle"} text={"Glows when active"}>
          <ToggleBtn />
        </ComponentTemplate>
      </div>
    </>
  );
}
