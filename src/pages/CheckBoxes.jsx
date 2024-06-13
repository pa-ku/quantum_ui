import React from "react";
import ThemeCheckbox from "../components/checkboxes/ThemeCheckbox";
import TextCheckbox from "../components/checkboxes/TextCheckbox";

import ToggleBtn from "../components/checkboxes/ToggleBtn";
import Heart_Checkbox from "../components/checkboxes/Heart_Checkbox";
import More_Btn from "../components/buttons/More_Btn";

export default function CheckBoxes() {
  return (
    <>
      <section className="section">
        <More_Btn />
      </section>
      <section className="section">
        <Heart_Checkbox />
      </section>
      <section className="section">
        <TextCheckbox />
      </section>
      <section className="section">
        <ThemeCheckbox />
      </section>
      <section className="section">
        <ToggleBtn />
      </section>
    </>
  );
}
