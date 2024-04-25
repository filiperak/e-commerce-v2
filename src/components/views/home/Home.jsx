import React, { useState } from 'react'
import { HomeContainer } from './styled'
import ProductList from '../../products/ProductList'
import HomeNavBar from '../../../homeNavBar/HomeNavBar'

const Home = () => {

  const [category,setCategory] = useState({display:'',url:''})
  return (
    <HomeContainer>
        <HomeNavBar category={category} setCategory={setCategory}/>
        <ProductList categoryUrl={category}/>
    </HomeContainer>
  )
}

export default Home