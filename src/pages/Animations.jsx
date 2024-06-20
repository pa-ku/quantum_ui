import React from "react";
import Chroma_anim from "../components/animations/Chroma_anim";
import Opacity_anim from "../components/animations/Opacity_anim";
import ComponentTemplate from "../components/ComponentTemplate";

export default function Animations() {
  return (
    <>
      <div className="wrapper">
        <h2>Animations</h2>
        <Chroma_anim />
      </div>
      <ComponentTemplate>
        <Opacity_anim />
      </ComponentTemplate>
    </>
  );
}
