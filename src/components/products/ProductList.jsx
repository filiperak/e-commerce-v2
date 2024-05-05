import React, { useContext, useEffect, useState } from "react";
import { ProductsListContainer, ProductsContainer } from "./styled";
import { api } from "../../services/api";
import ProductsListItem from "./ProductsListItem";
import { CategoryContext } from "../../context/CategoryContext";

const ProductList = ({
  handleNmOfProducts,
  searchInput,
  setProductItems,
  sortVal,
}) => {
  const [products, setProducts] = useState([]);
  const [searchParam, setSearchParam] = useState([]);
  const { categoryState } = useContext(CategoryContext);

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
        setProductItems(result.products);
      }
    } catch (e) {
      console.log(e);
    }
  }


  useEffect(() => {
    fetchProducts(api);
  }, [categoryState]);

  useEffect(() => {
    handleNmOfProducts(products.length);
  }, [products]);

  useEffect(() => {
    setProducts(searchInput);
  }, [searchInput]);

  useEffect(() => {
    // switch (sortVal) {
    //   case 'PRICE_LOW_TO_HIGH':
    //     console.log(1);
    //   case 'PRICE_HIGH_TO_LOW':
    //     console.log(2);
    //   case 'RATING_LOW_TO_HIGH':
    //     console.log(3);
    //   case 'RATING_HIGH_TO_LOW':
    //     console.log(4);
    
    //   default:
    //     break;
    // }
    console.log(sortVal);
  },[sortVal])
  return (
    <ProductsContainer>
      <ProductsListContainer>
      <p>{sortVal}</p>

        {products.map((elem) => (
          <ProductsListItem key={elem.id} data={elem} />
        ))}
      </ProductsListContainer>
    </ProductsContainer>
  );
};

export default ProductList;
