import React from "react";
import Chroma_anim from "../components/animations/Chroma_anim";
import Opacity_anim from "../components/animations/Opacity_anim";
import ComponentTemplate from "../components/ComponentTemplate";
import Glow_anim from "../components/animations/Glow_anim";
import ComponentTitle from "../components/ComponentTitle";

export default function Animations() {
  return (
    <>
      <ComponentTitle>
      Animations
      </ComponentTitle>
      <ComponentTemplate title={"Chroma"} lenguaje={"css"} text={""}>
        <Chroma_anim />
      </ComponentTemplate>

      <ComponentTemplate
        text={"Minimal animation to show an element"}
        title={"Opacity"}
        lenguaje={"css"}
      >
        <Opacity_anim />
      </ComponentTemplate>

      <ComponentTemplate title={"Glow"} lenguaje={"css"} text={""}>
        <Glow_anim />
      </ComponentTemplate>
    </>
  );
}
