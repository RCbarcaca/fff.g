import React from 'react'
import Pagination from '../../components/utility/Pagination'
import AllProducts from '../../components/Category/AllProducts'

const AllCategoryPage = () => {
  return (
    <div style={{minHeight: '670px'}}>
      <AllProducts/>
      <Pagination/>
    </div>
  )
}

export default AllCategoryPage
