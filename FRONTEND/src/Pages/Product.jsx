import React from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import BredCrums from '../Component/BredCrums/BredCrums'


const Product = () => {
   const {allproducts} =useContext(ShopContext);
   const {productId}= useParams();
   const product = allproducts.find((item) => item.id ===(productId));

  return (
    <div>
      <BredCrums product={product}/>
    </div>
  )
}

export default {Product}