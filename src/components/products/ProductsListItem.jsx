import React from 'react'
import { ProductsListItemContainer,ProductListItemInfo } from './styled'
import ImageSlider from '../imageSlider/ImageSlider'

const ProductsListItem = ({data}) => {
  return (
   <ProductsListItemContainer>
        <ImageSlider imageData={data.images}/>
        <ProductListItemInfo>
          <div>
            <p>{data.title}</p>
            <p>{`$${data.price}`}</p>
          </div>
          <span>{data.brand}</span>
        </ProductListItemInfo>
   </ProductsListItemContainer>
  )
}

export default ProductsListItem