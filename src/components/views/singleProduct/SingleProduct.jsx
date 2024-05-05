import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../services/api";
import {
  AddToCart,
  PriceAndRating,
  SingleProductContainer,
  SingleProductData,
} from "./styled";
import ImageSlider from "../../imageSlider/ImageSlider";
import StarRatings from "react-star-ratings";
import ProductNav from "../../products/ProductNav";

const SingleProduct = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [cartCount, setCartCount] = useState(0);

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
    <>
      <ProductNav productName={singleProduct.title}/>
      <SingleProductContainer>
        <ImageSlider imageData={singleProduct.images} />
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
          <AddToCart>
            <span
              onClick={() =>
                cartCount !== 0 ? setCartCount(cartCount - 1) : null
              }
            >
              -
            </span>
            <span>{cartCount}</span>
            <span onClick={() => setCartCount(cartCount + 1)}>+</span>

            <button>Add to cart</button>
          </AddToCart>
        </SingleProductData>
      </SingleProductContainer>
    </>
  );
};

export default SingleProduct;
