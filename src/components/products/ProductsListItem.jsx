import React from 'react'
import { ProductsListItemContainer,ProductListItemInfo } from './styled'
import ImageSlider from '../imageSlider/ImageSlider'
import { Link } from 'react-router-dom'

const ProductsListItem = ({data}) => {
  return (
   <ProductsListItemContainer>
        <Link to={`/product/${data.id}`}>

        <ImageSlider imageData={data.images}/>
        <ProductListItemInfo>
          <div>
            <p>{data.title}</p>
            <p>{`$${data.price}`}</p>
          </div>
          <span>{data.brand}</span>
        </ProductListItemInfo>
        </Link>

   </ProductsListItemContainer>
  )
}

export default ProductsListItem