import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import { Container } from 'react-bootstrap'
import ProductsDetails from '../Products/ProductsDetails'


const ProductsDetailsPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
      <CategoryHeader/>
      <Container>
       <ProductsDetails/>
      </Container>
    </div>
  )
}

export default ProductsDetailsPage
