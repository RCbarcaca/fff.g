import React from 'react'
import Slider from '../../components/Slider'
import HomeCategory from '../../components/home/HomeCategory'
import CardProductsContainer from '../../components/Products/CardProductsContainer'
import DiscountSection from '../../components/home/DiscountSection'


const HomePage = () => {
  return (
    <div className='font' style={{ minHeight: '670px'}}>
      
      <Slider/>
      <HomeCategory/>
      <CardProductsContainer title="Products" btntitle="Show more" pathText="/AllProducts"/>
      <DiscountSection/>
      <CardProductsContainer title="More Products" btntitle="Show more" pathText="/AllProducts"/>
      
    </div>
  )
}

export default HomePage
