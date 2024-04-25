import React from 'react'
import { HomeContainer } from './styled'
import ProductList from '../../products/ProductList'

const Home = () => {
  return (
    <HomeContainer>
        <ProductList/>
    </HomeContainer>
  )
}

export default Home