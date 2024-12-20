import React, { useEffect, useState } from 'react'
import classes from './Results.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../Api/endPoints'
import ProductCard from '../../components/Product/ProductCard'

function Results() {
  const [results, setResults]= useState([]);
  const {catagoryName} = useParams()
  // console.log(catagoryName)
  
  useEffect(() => {
      axios.get(`${baseURL}/products/category/${catagoryName}`)
  .then((res)=>{
    setResults(res.data)
    // console.log(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  }, [catagoryName])
  
  
  
  

  return (
    <LayOut>
     <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {catagoryName}</p>
        <hr />
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
      </section>
    </LayOut>
  )
}

export default Results