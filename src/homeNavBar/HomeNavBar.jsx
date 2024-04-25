import React from "react";
import { HomeNavContainer } from "./styled";

const HomeNavBar = () => {
  const allCategories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting",
  ];
  const mainCategories = [
    {displayName: "ALL",
      urlExtention: ""},
    {displayName: "WOMAN",
      urlExtention: "womens-dresses"},
    {displayName: "MEN",
      urlExtention: "mens-shirts"},
    {displayName: "HOME",
      urlExtention: "home-decoration"},
    {displayName: "WOMAN",
      urlExtention: "womens-dresses"},
    
  ];
  return (
    <HomeNavContainer>
      <p>HOME</p>
      <p>HOME</p>
      <p>HOME</p>
      <p>HOME</p>
      <p>HOME</p>
    </HomeNavContainer>
  );
};

export default HomeNavBar;
