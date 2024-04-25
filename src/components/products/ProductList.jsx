import React, { useEffect, useState } from "react";
import { ProductsContainer } from "./styled";
import { api } from "../../services/api";
import ProductsListItem from "./ProductsListItem";

const ProductList = ({categoryUrl}) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts(URL) {
    try {
      const response = await fetch(
       // `https://dummyjson.com/products/${categoryUrl.url}?limit=10&skip=10`
         `${URL}/category/${categoryUrl.url}?limit=10&skip=${count * 10}`  
         //https://dummyjson.com/products/category/womens-dresses?limit=10&skip=2
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

  }, [count,categoryUrl]);
  console.log(categoryUrl.url);
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
