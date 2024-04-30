import React, { useState } from "react";
import { ImageIndicators, ImagesContainer, MainImgContainer } from "./styled";

const SingleProductImages = ({ images }) => {
  const [currentImg, setCurrentImg] = useState(1);
  return (
    <>
      {images && images.length > 0 ? (
        <ImagesContainer>
          <ImageIndicators>
            {images.map((elem, ind) => (
              <div>
              <img
                src={elem}
                key={ind}
                className={
                  currentImg === ind
                    ? "current-indicator"
                    : "not-current-indicator"
                }
                onClick={() => setCurrentImg(ind)}
              />
              </div>
            ))}
          </ImageIndicators>
          <MainImgContainer>
            {images.map((elem, index) => (
              <img
                key={index}
                src={elem}
                alt="product image"
                className={
                  currentImg === index
                    ? "current-img product-img"
                    : "current-img hide-current-img product-img"
                }
              />
            ))}
          </MainImgContainer>
        </ImagesContainer>
      ) : null}
    </>
  );
};

export default SingleProductImages;
