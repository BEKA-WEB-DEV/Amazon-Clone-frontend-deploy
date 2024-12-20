import React from 'react'
import {categoryInfos} from './CatagoryFullinfo'
import CatagoryCard from './CatagoryCard'
import classes from './Catagory.module.css'

function Catagory() {
  return (
    <section className={classes.category__container}>
      {
      categoryInfos.map((infos, i) => (
        <CatagoryCard key={i} data = {infos} />
      ))
      }
      
    </section>
  )
}

export default Catagory