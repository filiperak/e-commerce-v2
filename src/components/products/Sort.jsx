import React, { useState } from "react";
import { SortBar, SortSelect } from "./styled";

const Sort = ({ numOfProducts , sortValue}) => {
  const [selectedSort,setSelectedSort] = useState('');
  return (
    <SortBar>
      <p>{`${numOfProducts} out of 100 products`}</p>
      <SortSelect>
        <p>Sort by:</p>
        <select name="selectSort" value={selectedSort} onChange={(e) => setSelectedSort(e.target.value)}>
          <option selected hidden>
            Featured
          </option>
          <option value="PRICE_LOW_TO_HIGH">Price: Low to High</option>
          <option value="PRICE_HIGH_TO_LOW">Price: High to Low</option>
          <option value="RATING_LOW_TO_HIGH">Rating: Low to High</option>
          <option value="RATING_HIGH_TO_LOW">Rating: High to Low</option>
        </select>
      </SortSelect>
    </SortBar>
  );
};

export default Sort;
