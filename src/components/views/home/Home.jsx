import React from 'react'
import { HomeContainer } from './styled'
import ProductList from '../../products/ProductList'
import HomeNavBar from '../../../homeNavBar/HomeNavBar'

const Home = () => {
  return (
    <HomeContainer>
        <HomeNavBar/>
        <ProductList/>
    </HomeContainer>
  )
}

export default Home