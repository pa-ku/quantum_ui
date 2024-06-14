import React from "react";
import ThemeCheckbox from "../components/checkboxes/ThemeCheckbox";
import TextCheckbox from "../components/checkboxes/TextCheckbox";

import ToggleBtn from "../components/checkboxes/ToggleBtn";
import Heart_Checkbox from "../components/checkboxes/Heart_Checkbox";
import More_Checkbox from "../components/checkboxes/More_Checkbox";

export default function CheckBoxes() {
  return (
    <>
    <h2>CheckBoxes</h2>
      <section className="section">
        <More_Checkbox />
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
