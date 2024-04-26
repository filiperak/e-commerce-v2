import React, { useState } from 'react'
import { HomeContainer } from './styled'
import ProductList from '../../products/ProductList'
import Sort from '../../products/Sort'

const Home = () => {
  const [numOfProducts,setNumOfProducts] = useState(0)
  return (
    <HomeContainer>
        <Sort numOfProducts={numOfProducts}/>
        <ProductList handleNmOfProducts={setNumOfProducts}/>
    </HomeContainer>
  )
}

export default Home