import ComponentTemplate from "../components/ComponentTemplate";
import GlowingCard from "../components/cards/Chroma_Card";
import ProductCard from "../components/cards/ProductCard";
import Card_1 from "../components/cards/Product_Card";

export default function Cards() {
  return (
    <>
      <div className="wrapper">
        <ComponentTemplate
          title={"Product Card"}
          text={
            "Showcasing the selling item, you have the option to automaticly calculate the discount label"
          }
        >
          <ProductCard />
        </ComponentTemplate>

        <ComponentTemplate
          title={"Showcase"}
          text={"Minimalistic Card with key information"}
        >
          <Card_1 />
        </ComponentTemplate>

      </div>
    </>
  );
}
