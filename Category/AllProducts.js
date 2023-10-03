import React from 'react'
import ProductsCard from '../Products/ProductsCard'
import { Container, Row } from 'react-bootstrap'

const AllProducts = () => {
  return (
    <Container>
    <Row>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      </Row>
    </Container>
  )
}

export default AllProducts
