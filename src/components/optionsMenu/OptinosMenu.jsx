import React, { useEffect, useState } from "react";
import { CategoryContainer, OptionsMenuContainer } from "./styled";
import { api } from "../../services/api";
import { dashRemoverFunc } from "../../utility/dashRemoverFunc";
const OptionsMenu = () => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    fetchOptions(api);
  }, []);
  async function fetchOptions(url) {
    try {
      const response = await fetch(`${url}/categories`);
      const result = await response.json();
      if (result && result.length > 0) {
        setOptions(result);
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <OptionsMenuContainer>
      <h4>Categories</h4>
      <option value="">All</option>
      {options.map((elem, index) => (
        <option key={index} value={elem}>
          {dashRemoverFunc(elem)}
        </option>
      ))}
    </OptionsMenuContainer>
  );
};

export default OptionsMenu;
