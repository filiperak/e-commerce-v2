import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import {
  PriceAndRating,
  SingleProductContainer,
  SingleProductData,
} from "./styled";
import ImageSlider from "../../imageSlider/ImageSlider";
import SingleProductImages from "./SingleProductImages";
import StarRatings from "react-star-ratings";


const SingleProduct = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  async function fetchSingleProduct() {
    try {
      const response = await fetch(`${api}/${productId}`);
      const result = await response.json();
      if (result) {
        setSingleProduct(result);
        console.log(singleProduct);
      }
    } catch (e) {
      console.log(e);
    }
  }
  useState(() => {
    fetchSingleProduct();
  }, []);
  return (
    <SingleProductContainer>
      {/* <SingleProductImages images={singleProduct.images} /> */}
<ImageSlider imageData={singleProduct.images}/>

      <SingleProductData>
        <h3>{singleProduct.title}</h3>
        <span>{singleProduct.brand}</span>
        <PriceAndRating>
          <p>${singleProduct.price}</p>
          <div>
          <StarRatings
            rating={singleProduct.rating}
            starEmptyColor="#dedede"
            starRatedColor="orange"
            numberOfStars={5}
            starDimension="20px"
            starSpacing="1px"
          />
          <p>{`(${singleProduct.rating})`}</p>
          </div>
        </PriceAndRating>
        <h5>Description</h5>
        <p>{singleProduct.description}</p>
        <button>Add to cart</button>
      </SingleProductData>
    </SingleProductContainer>
  );
};

export default SingleProduct;
