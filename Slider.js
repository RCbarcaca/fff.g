import React, { useState } from 'react'
import {Carousel, Form }  from 'react-bootstrap'
import slider1  from '../images/slider1.png'
import slider3  from '../images/slider3.png'

const Slider = () => {
  const [index, setIndex]=useState()
  const handleSelect = (selectedIndex) =>{
   setIndex(selectedIndex)
  }
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="slider-background" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                     style={{ height: "296px", width: "313.53px" }}
                     className=""
                     src={slider3}
                     alt="First slide"
                     /> 
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item className="slider-background2" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "313.53px" }}
                        className=""
                        src={slider1}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background3" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                    <img
                        style={{ height: "296px", width: "373.53px" }}
                        className=""
                        src={slider3}
                        alt="First slide"
                    />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>

            <Carousel.Item className="slider-background4" interval={2000}>
                <div className="d-flex flex-row justify-content-center align-items-center">
                <img
                style={{ height: "296px", width: "373.53px" }}
                className=""
                src={slider3}
                alt="First slide"
            />
                    <div className="">
                        <h3 className="slider-title">هناك خصم كبير</h3>
                        <p className="slider-text">خصم يصل ٥٠٪ عند شرائك</p>
                    </div>
                </div>
            </Carousel.Item>
        </Carousel>

  )
}

export default Slider