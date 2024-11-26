import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import MyCarousel from '../../components/Carousel/Carousel'
import Catagory from '../../components/Catagory/Catagory'
import Product from '../../components/Product/Product'

function Landing() {
  return (
    <LayOut>
        <MyCarousel />
        <Catagory />
        <Product />
    </LayOut>
  )
}

export default Landing