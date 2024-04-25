import React from "react";
import { HomeNavContainer } from "./styled";

const HomeNavBar = ({category,setCategory}) => {
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

  const handleClick = (name,url) => {
    setCategory({display:name,url:url})
  }
  return (
    <HomeNavContainer>
      {mainCategories.map((elem,index) => (
        <p
         key={index}
         onClick={() => handleClick(elem.displayName,elem.urlExtention)}
         style={{borderBottom: category.display === elem.displayName? '3px solid #000' :null}}
         >{elem.displayName}</p>
      ))}
    </HomeNavContainer>
  );
};

export default HomeNavBar;
