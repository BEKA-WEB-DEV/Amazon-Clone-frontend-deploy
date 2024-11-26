import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';
import { DataContext } from '../DataProvider/DataProvider';
import { Type } from '../../Utility/action.type';


function ProductCard({product, flex, renderDesc, renderAdd}) {
    const {image, title, id, price, rating, description} = product;

    const[state, dispatch] = useContext(DataContext)
    // console.log(state)

    const addToCart = ()=>{
        dispatch({
            type:Type.ADD_TO_BASKET,
            item:{
                ...product
            }
        })
    }

    return (
    <div className={`${classes.card__container} ${flex?classes.product__flexed : ''}`} >
        <Link to={`/product/${id}`}>
            <img src={image} className={classes.img_container} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            {renderDesc && <div style={{maxWidth:"750px"}}>{description}</div>}
            <div className={classes.rating}>
                {/* rating */}
                <Rating value={rating?.rate} precision={0.1} />
                {/* count */}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price} />
            </div>
            
            {
                renderAdd && <button className={classes.button} onClick={addToCart} >
                add to cart
            </button>
            }
            
            
        </div>
    
    </div>
  )
}

export default ProductCard