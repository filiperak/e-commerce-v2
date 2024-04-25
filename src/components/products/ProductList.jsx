import React, { useEffect, useState } from "react";
import { ProductsContainer } from "./styled";
import { api } from "../../services/api";
import ProductsListItem from "./ProductsListItem";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts(URL) {
    try {
      const response = await fetch(
        `${URL}?limit=10&skip=${count === 0 ? 0 : count * 10}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setProducts((prevState) => [...prevState, ...result.products]);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts(api);

  }, [count]);
  return (
    <ProductsContainer>
      {products.map((elem) => (
        <ProductsListItem key={elem.id} data={elem} />
      ))}
      <button onClick={() => setCount(count + 1)}>Load more Products</button>
    </ProductsContainer>
  );
};

export default ProductList;
