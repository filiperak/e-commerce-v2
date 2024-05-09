import React, { useContext } from 'react'
import { CartContainer ,ShoppingCart,OrderSummary, CartHeader,CartList, CartItemHeader, GoBack} from './styled'
import { CartContext } from '../../../context/CartContext'
import CartListItem from './CartListItem'
import CartForm from './CartForm'
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const {cartState,cartDispatch} = useContext(CartContext)
  const navigate = useNavigate()
  return (
    <CartContainer>
        <ShoppingCart>
          <GoBack onClick={() => navigate(-1)}>
            <KeyboardBackspaceIcon/>
            <p>Go Back</p>
          </GoBack>
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
          <CartForm/>
        </OrderSummary>
    </CartContainer>
  )
}

export default Cart