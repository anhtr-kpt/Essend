import ProductCard from "./product-card";

export default function ProductList() {
  return (
    <ul className="grid grid-cols-4 gap-3">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </ul>
  );
}
