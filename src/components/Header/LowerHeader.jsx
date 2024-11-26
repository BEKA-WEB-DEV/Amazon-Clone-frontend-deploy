import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import classes from './Header.module.css'


function LowerHeader() {
  return (
    <div className={classes.lower__container}>

        <ul>
            <li>
                <a href="/">
                <AiOutlineMenu />
                <p>All</p>
                </a>
                
            </li>
            <li>
                <a href="/">Today's Deals</a></li>
            <li>
                <a href="/">Costumer Service</a></li>
            <li>
                <a href="/">Registry</a></li>
            <li>
                <a href="/">Gift Cards</a></li>
            <li>
                <a href="/">Sell</a></li>
        </ul>



    </div>
  )
}

export default LowerHeader