import { useEffect, useState } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";

type Product = {
  id: number;
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  price: string;
  color: string;
};

function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log("Fetching products...");
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {console.log(res); setProducts(res.data)})
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {Array.isArray(products) && products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
