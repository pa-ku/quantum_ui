import ComponentTemplate from "../components/ComponentTemplate";
import ShowcaseCard from "../components/cards/Product_Card";
import ProductCard from "../components/cards/Showcase_Card";
import ComponentTitle from "../components/ComponentTitle";
export default function Cards() {
  return (
    <>
      <ComponentTitle>
      Cards
      </ComponentTitle>
      <div className="wrapper">
        <ComponentTemplate
          title={"Product"}
          text={
            "Showcasing the selling item, you have the option to automaticly calculate the discount label"
          }
        >
          <ShowcaseCard />
        </ComponentTemplate>

        <ComponentTemplate
          title={"Showcase"}
          text={"Minimalistic Card with key information"}
        >
          <ProductCard />
        </ComponentTemplate>
      </div>
    </>
  );
}
