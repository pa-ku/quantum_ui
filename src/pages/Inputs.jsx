import React from "react";
import MinimalInput from "../components/inputs/MinimalInput";
import InputSearch from "../components/inputs/InputSearch";
import ComponentTemplate from "../components/ComponentTemplate";

export default function Inputs() {
  return (
    <>
      <div className="wrapper">
        <ComponentTemplate
          title={"Search Bar"}
          text={"Uses Javascript to detect when the imput has content to show Search icon or Close Icon"}
        >
          <InputSearch />
        </ComponentTemplate>
        <ComponentTemplate
          text={"Less is more with his imput, does the job"}
          title={"Minimal input"}
        >
          <MinimalInput />
        </ComponentTemplate>
      </div>
    </>
  );
}
