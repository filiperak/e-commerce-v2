import React, { useContext, useState } from "react";
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
import Loading from "../../states/Loading";
import Error from "../../states/Error";
import { CartContext } from "../../../context/CartContext";

const SingleProduct = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState([]);
  const [cartCount, setCartCount] = useState(1);
  const [loading,setLoading] = useState(false);
  const [errorMsg,setErrorMsg] = useState(null);
  const {cartDispatch} = useContext(CartContext)

  async function fetchSingleProduct() {
    try {
      setLoading(true)
      const response = await fetch(`${api}/${productId}`);
      const result = await response.json();
      if (result) {
        setSingleProduct(result);
        setLoading(false)
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }
  useState(() => {
    fetchSingleProduct();
  }, []);
  const handleAdd = () => {
    cartDispatch({
      type:'ADD_TO_CART',
      payload : {
        id:singleProduct.id,
        quantity:cartCount,
        title:singleProduct.title,
        price:singleProduct.price,
        img:singleProduct.thumbnail
      }
    })
  }

  if(loading) return <Loading/>
  if(errorMsg !== null) return <Error msg={errorMsg}/>
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
                cartCount !== 1 ? setCartCount(cartCount - 1) : null
              }
            >
              -
            </span>
            <span>{cartCount}</span>
            <span onClick={() => setCartCount(cartCount + 1)}>+</span>

            <button
            onClick={handleAdd}>Add to cart</button>
          </AddToCart>
        </SingleProductData>
      </SingleProductContainer>
    </>
  );
};

export default SingleProduct;
