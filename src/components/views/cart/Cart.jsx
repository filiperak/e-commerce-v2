import React, { useContext } from "react";
import {
  CartContainer,
  ShoppingCart,
  OrderSummary,
  CartHeader,
  CartList,
  CartItemHeader,
  GoBack,
  ListWrapper,
} from "./styled";
import { CartContext } from "../../../context/CartContext";
import CartListItem from "./CartListItem";
import CartForm from "./CartForm";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import ProductNav from "../../products/ProductNav";
const Cart = () => {
  const { cartState, cartDispatch } = useContext(CartContext);
  return (
    <>
      <ProductNav />
      <CartContainer>
        <ShoppingCart>
          <CartHeader>
            <h3>Shopping Cart</h3>
            <span>
              {cartState.length !== 0
                ? `${cartState.length} Items`
                : "Empty cart"}
            </span>
          </CartHeader>
          <ListWrapper>
            <CartItemHeader>
              <h5>Product Details</h5>
              <h6>quantity</h6>
              <h6 className="price-total">price</h6>
              <h6 className="price-total">total</h6>
            </CartItemHeader>
            <CartList>
              {cartState.map((elem) => (
                <CartListItem productInfo={elem} />
              ))}
            </CartList>
          </ListWrapper>
        </ShoppingCart>
        <OrderSummary>
          <h3>Order Summary</h3>
          <CartForm />
        </OrderSummary>
      </CartContainer>
    </>
  );
};

export default Cart;
