import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { img } from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from './Carousel.module.css'

function MyCarousel() {
  return (
    <div>

        <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        >
            {
                img.map((item) => {
                    return <img key={item} src={item} alt=""/>
                })
            }


        </Carousel>

        <div className={classes.hero__img}></div>

    
    </div>
  )
}

export default MyCarousel