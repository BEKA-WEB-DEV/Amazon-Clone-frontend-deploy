import React, { useEffect, useState} from 'react'
// import classes from './ProductDetail.module.css'
import LayOut from '../../components/LayOut/LayOut'
import ProductCard from '../../components/Product/ProductCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../Api/endPoints'
import Loader from '../../components/Loader/Loader'

function ProductDetail() {
  const {productId} = useParams()
  const [products, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  
  
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${baseURL}/products/${productId}`)
    .then((res)=>{
      setProduct(res.data);
      setIsLoading(false);
    }).catch((err)=>{
      console.log(err)
      setIsLoading(false)
    })
  }, [])
  return (
    <LayOut> 
   
   {isLoading? (<Loader/>):(
   <ProductCard
    product={products}
    flex ={true}
    renderDesc={true}
    renderAdd={true}
    


/>)}
    </LayOut>
  )
}

export default ProductDetail