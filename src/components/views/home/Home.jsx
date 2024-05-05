import React, { useEffect, useState } from "react";
import { HomeContainer } from "./styled";
import ProductList from "../../products/ProductList";
import Sort from "../../products/Sort";

const Home = ({ searchInput, setProductItems }) => {
  const [numOfProducts, setNumOfProducts] = useState(0);
  const [sortVal,setSortVal] = useState('')
  return (
    <HomeContainer>
      <Sort numOfProducts={numOfProducts} sortValue={setSortVal}/>
      <ProductList
        handleNmOfProducts={setNumOfProducts}
        searchInput={searchInput}
        setProductItems={setProductItems}
        sortVal={sortVal}
      />
    </HomeContainer>
  );
};

export default Home;
