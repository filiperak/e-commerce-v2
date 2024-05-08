import React, { useContext } from 'react'
import { CartContainer ,ShoppingCart,OrderSummary, CartHeader} from './styled'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {
  const {cartState,cartDispatch} = useContext(CartContext)
  return (
    <CartContainer>
        <ShoppingCart>
          <CartHeader>
          <h2>Shopping Cart</h2>
          <span>{`${cartState.length} Items`}</span>
          </CartHeader>
        </ShoppingCart>
        <OrderSummary>
          <h3>Order Summary</h3>
        </OrderSummary>
    </CartContainer>
  )
}

export default Cart