import React, { useContext, useEffect, useState } from "react";
import { ProductsContainer } from "./styled";
import { api } from "../../services/api";
import ProductsListItem from "./ProductsListItem";
import { CategoryContext } from "../../context/CategoryContext";


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const {categoryState,categoryDispatch} = useContext(CategoryContext)
  console.log(typeof(categoryState),categoryState.category);
  async function fetchProducts(URL) {
    try {
      let apiUrl = URL;
      if(categoryState.category !== ''){
        apiUrl += `/category/${categoryState.category}`
      }else{
        apiUrl += `?limit=100`

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
    console.log(categoryState.category);
  }, [categoryState.category]);
  return (
    <ProductsContainer>
      {products.map((elem) => (
        <ProductsListItem key={elem.id} data={elem} />
      ))}
    </ProductsContainer>
  );
};

export default ProductList;
