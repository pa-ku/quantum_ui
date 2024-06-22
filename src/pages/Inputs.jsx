import React from "react";
import MinimalInput from "../components/inputs/MinimalInput";
import InputSearch from "../components/inputs/InputSearch";
import ComponentTemplate from "../components/ComponentTemplate";
import ComponentTitle from "../components/ComponentTitle";
export default function Inputs() {
  return (
    <>
      <ComponentTitle>
        Inputs
      </ComponentTitle>
        <ComponentTemplate
          title={"Search Bar"}
          text={"Uses Javascript to detect when the imput has content to show Search icon or Close Icon"}
        >
          <InputSearch />
        </ComponentTemplate>
        <ComponentTemplate
          text={"Less is more with his imput, does the job"}
          title={"Minimal"}
        >
          <MinimalInput />
        </ComponentTemplate>

    </>
  );
}
