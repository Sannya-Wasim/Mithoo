import ProductCard from "./ProductCard";
import petFood from "../assets/images/petFood.png"

var products = [
  {
    image: petFood,
    name: "Pet Food",
    description: "Pet Food Description",
  },
  {
    image: petFood,
    name: "Pet Food",
    description: "Pet Food Description",
  },
  {
    image: petFood,
    name: "Pet Food",
    description: "Pet Food Description",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section">
      <div className="cover-div">
        <h2>Our Products</h2>
        <div id="products">
          {products.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
