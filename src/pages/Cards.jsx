import ComponentTemplate from "../components/ComponentTemplate";
import ComponentTitle from "../components/ComponentTitle";
import Accent_card from "../components/cards/Accent_card";
import Showcase_card from "../components/cards/Showcase_card";
import AccentText from "../components/AccentText";
import Product_card from "../components/cards/Product_card";

export default function Cards() {
  return (
    <>
      <ComponentTitle>Cards</ComponentTitle>
      <div className="wrapper">
        <ComponentTemplate
          title={"Accent"}
          text={
            <p>
              - <AccentText text={"animate-pulse"} /> is a good alternative for
              an animation.
              <br />
              - With the
              <AccentText text={" via"} /> class more colors can be added.
              <br />
              - Changing the <AccentText text={" mix-blend-multiply"} /> to
              darken or dark-light makes the logo interact in different ways
              with the background.
            </p>
          }
        >
          <Accent_card />
        </ComponentTemplate>

        <ComponentTemplate
          title={"Product"}
          text={
            "Showcasing the selling item, you have the option to automaticly calculate the discount label"
          }
        >
          <Product_card />
        </ComponentTemplate>

        <ComponentTemplate
          title={"Showcase"}
          text={"Minimalistic Card with key information"}
        >
          <Showcase_card />
        </ComponentTemplate>
      </div>
    </>
  );
}
