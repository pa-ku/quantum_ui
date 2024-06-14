import React from "react";
import MinimalInput from "../components/inputs/MinimalInput";
import InputSearch from "../components/inputs/InputSearch";

export default function Inputs() {
  return (
    <>
    <h2>Imputs</h2>
      <section className="section">
        <InputSearch />
      </section>
      <section className="section">
        <MinimalInput />
      </section>
    </>
  );
}
