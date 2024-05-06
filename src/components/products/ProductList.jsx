import React, { useContext, useEffect, useState } from "react";
import { ProductsListContainer, ProductsContainer } from "./styled";
import { api } from "../../services/api";
import ProductsListItem from "./ProductsListItem";
import { CategoryContext } from "../../context/CategoryContext";
import { priceHighToLowFunction, priceLowToHighFunction, ratingHighToLowFunction, ratingLowToHighFunction } from "../../utility/sortFunctions";

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
    switch (sortVal) {
      case 'PRICE_LOW_TO_HIGH':
        setProducts(priceLowToHighFunction(products))
        break
      case 'PRICE_HIGH_TO_LOW':
        setProducts(priceHighToLowFunction(products))
        break
      case 'RATING_LOW_TO_HIGH':
        setProducts(ratingLowToHighFunction(products))
        break
      case 'RATING_HIGH_TO_LOW':
        setProducts(ratingHighToLowFunction(products))
        break
      case 'FEATURED':
        setProducts(products)
        break
      default:
        break;
    }
  },[sortVal,products])
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


