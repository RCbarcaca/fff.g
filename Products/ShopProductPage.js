import React from 'react'
import CategoryHeader from '../../components/Category/CategoryHeader'
import SearchCountresoult from '../../components/utility/SearchCountresoult'
import { Col, Container,Row } from 'react-bootstrap'
import SideFilter from '../../components/utility/SideFilter'
import AllProducts from '../../components/Category/AllProducts'
import Pagination from '../../components/utility/Pagination'


const ShopProductPage = () => {
  return (
    <div style={{minHeight:'630px'}}>
      <CategoryHeader/>
      <Container>
        <SearchCountresoult title="400 prudacts"/>
        <Row className='d-flex flex-row'>
          <Col sm="2" xs="2" md="1" className='d-flex'>
             <SideFilter/>
          </Col>
          <Col sm="10" xs="10" md="11">
              <AllProducts title="" />
          </Col>
        </Row>
        <Pagination/>
      </Container>
    </div>
  )
}

export default ShopProductPage
