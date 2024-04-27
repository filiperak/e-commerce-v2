import React, { useState } from 'react'
import { HomeContainer } from './styled'
import ProductList from '../../products/ProductList'
import Sort from '../../products/Sort'

const Home = ({searchInput}) => {
  const [numOfProducts,setNumOfProducts] = useState(0)
  return (
    <HomeContainer>
        <Sort numOfProducts={numOfProducts}/>
        <ProductList handleNmOfProducts={setNumOfProducts} searchInput={searchInput}/>
    </HomeContainer>
  )
}

export default Home