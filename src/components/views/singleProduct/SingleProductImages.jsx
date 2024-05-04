import React, { useState } from "react";
import {CurrentImg, ImgContainer } from "./styled";

const SingleProductImages = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(1);
  return (
    <ImgContainer>
      <CurrentImg>
        {images.map((elem,index) => (
          <img 
          key={index}
          src={elem}
          className={'123'}/>
        ))}
      </CurrentImg>
    </ImgContainer>
  );
};

export default SingleProductImages;
