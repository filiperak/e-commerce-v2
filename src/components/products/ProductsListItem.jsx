import React from 'react'
import { ProductsListItemContainer } from './styled'
import ImageSlider from '../imageSlider/ImageSlider'

const ProductsListItem = ({data}) => {
  return (
   <ProductsListItemContainer>
        <ImageSlider imageData={data.images}/>
        <img src={data.images[0]}  />
        <p>{data.title}</p>
   </ProductsListItemContainer>
  )
}

export default ProductsListItem