import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ProductsCard from './ProductsCard'
import SubTitle from '../utility/SubTitle'

const CardProductsContainer = ({title, btntitle, pathText}) => {
  return (
    <Container>
    <SubTitle title={title} btntitle={btntitle} pathText={pathText}/>
    <Row>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      <ProductsCard/>
      </Row>
    </Container>
  )
}

export default CardProductsContainer