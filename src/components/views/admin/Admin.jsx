import React from 'react'
import { AdminContainer, OpacityContainer } from './styled'
import ProductList from '../../products/ProductList'

const Admin = () => {
  return <>
    <AdminContainer>
        <h3>This is a admin page. Here you can update, create and delete products.</h3>
        <OpacityContainer>
            <ProductList/>
        </OpacityContainer>
    </AdminContainer>
  </>
}

export default Admin