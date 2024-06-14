import GlowingCard from "../components/cards/Chroma_Card";
import ProductCard from "../components/cards/ProductCard";
import Card_1 from "../components/cards/Product_Card";

export default function Cards() {
  return (
    <>
    <h2>Cards</h2>
      <section className="section">
        <ProductCard />
      </section>
      <section className="section">
        <Card_1 />
      </section>
      <section className="section">
        <GlowingCard />
      </section>
    </>
  );
}
