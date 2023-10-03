import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductsGallery from './ProductsGallery'
import ProductsText from './ProductsText'


const ProductsDetails = () => {
  return (
    <div>
      <Row className='py-3'>
        <Col lg="4">
          <ProductsGallery/>
        </Col>
        <Col lg="8">
          <ProductsText/>
        </Col>
      </Row>
    </div>
  )
}

export default ProductsDetails
