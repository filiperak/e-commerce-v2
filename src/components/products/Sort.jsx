import React from "react";
import { SortBar, SortSelect } from "./styled";

const Sort = ({ numOfProducts }) => {
  return (
    <SortBar>
      <p>{`${numOfProducts} out of 100 products`}</p>
      <SortSelect>
        <p>Sort by:</p>
        <select name="" id="">
          <option selected hidden>
            Featured
          </option>
          <option value="">Price: Low to High</option>
          <option value="">Price: High to Low</option>
          <option value="">Rating: Low to High</option>
          <option value="">Rating: High to Low</option>
        </select>
      </SortSelect>
    </SortBar>
  );
};

export default Sort;
