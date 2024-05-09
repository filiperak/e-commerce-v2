import React, { useContext } from 'react'
import { CartContainer ,ShoppingCart,OrderSummary, CartHeader,CartList, CartItemHeader} from './styled'
import { CartContext } from '../../../context/CartContext'
import CartListItem from './CartListItem'
const Cart = () => {
  const {cartState,cartDispatch} = useContext(CartContext)
  return (
    <CartContainer>
        <ShoppingCart>
          <CartHeader>
          <h2>Shopping Cart</h2>
          <span>{`${cartState.length} Items`}</span>
          </CartHeader>
          <CartItemHeader>
            <h5>Product Details</h5>
            <h6>quantity</h6>
            <h6 className='price-total'>price</h6>
            <h6 className='price-total'>total</h6>
          </CartItemHeader>
          <CartList>
            {cartState.map(elem =>(
              <CartListItem productInfo={elem}/>
            ))}
          </CartList>
        </ShoppingCart>
        <OrderSummary>
          <h3>Order Summary</h3>
        </OrderSummary>
    </CartContainer>
  )
}

export default Cart