import React from 'react'
import { ProductsListItemContainer } from './styled'

const ProductsListItem = ({data}) => {
  return (
   <ProductsListItemContainer>
        <img src={data.images[0]}  />
        <p>{data.title}</p>
   </ProductsListItemContainer>
  )
}

export default ProductsListItem