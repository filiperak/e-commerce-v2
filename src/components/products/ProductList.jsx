import React, { useContext, useEffect, useState } from "react";
import { ProductsListContainer, ProductsContainer } from "./styled";
import { api } from "../../services/api";
import ProductsListItem from "./ProductsListItem";
import { CategoryContext } from "../../context/CategoryContext";
import Sort from "./Sort";

const ProductList = ({handleNmOfProducts}) => {
  const [products, setProducts] = useState([]);
  const { categoryState, categoryDispatch } = useContext(CategoryContext);
  console.log(typeof categoryState, categoryState.category);
  async function fetchProducts(URL) {
    try {
      let apiUrl = URL;
      if (categoryState.category !== "") {
        apiUrl += `/category/${categoryState.category}`;
      } else {
        apiUrl += `?limit=100`;
      }
      const response = await fetch(apiUrl);
      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setProducts(result.products);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts(api);
  }, [categoryState]);

  useEffect(() => {
    handleNmOfProducts(products.length)
  }, [products]);
  return (
    <ProductsContainer>
      <ProductsListContainer>
        {products.map((elem) => (
          <ProductsListItem key={elem.id} data={elem} />
        ))}
      </ProductsListContainer>
    </ProductsContainer>
  );
};

export default ProductList;
