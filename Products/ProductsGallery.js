import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css"
import laptop from '../../images/laptop.png'
import mobile from '../../images/raisins.png'
import pistachio from '../../images/pistachio.png'
import ImageGallery from "react-image-gallery";

const ProductsGallery = () => {
  const images = [
    {
      original: `${laptop}`,
    },
    {
      original: `${mobile}`,
    },
    {
      original: `${pistachio}`,
     },
      ];
  return (
    <div className='products-gallery-card d-flex justify-content-center align-items-center pt-2'>
       <ImageGallery items={images} 
        defaultImage={laptop}
        showFullscreenButton={false}
        showPlayButton={false}
       />
    </div>
  )
}

export default ProductsGallery
