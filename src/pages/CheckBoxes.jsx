import React from "react";
import ThemeCheckbox from "../components/checkboxes/Theme_Checkbox";
import TextCheckbox from "../components/checkboxes/Active_Checkbox";

import ToggleBtn from "../components/checkboxes/Toggle_Checkbox";
import Heart_Checkbox from "../components/checkboxes/Heart_Checkbox";
import More_Checkbox from "../components/checkboxes/More_Checkbox";
import ComponentTemplate from "../components/ComponentTemplate";
import ComponentDescription from "../components/ComponentDescription";

export default function CheckBoxes() {
  return (
    <>
    
      <ComponentDescription>
        All the inputs uses the Type Checkbox,hidding the default style with
        ::before. Mantaining all the benefits from the vanilla input
      </ComponentDescription>
        <ComponentTemplate title={"Theme"} text={"Simple toggle theme"}>
          <ThemeCheckbox />
        </ComponentTemplate>
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

        <ComponentTemplate title={"Toggle"} text={"Glows when active"}>
          <ToggleBtn />
        </ComponentTemplate>
     
    </>
  );
}
