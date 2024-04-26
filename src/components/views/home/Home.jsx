import React from 'react'
import { HomeContainer } from './styled'
import ProductList from '../../products/ProductList'
import OptionsMenu from '../../optionsMenu/OptinosMenu'

const Home = () => {
  return (
    <HomeContainer>
        <ProductList/>
    </HomeContainer>
  )
}

export default Home