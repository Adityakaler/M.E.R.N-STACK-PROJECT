import React, { useContext } from 'react'
import "../CSS/ShopCategory.css"
import { ShopContext } from '../Context/ShopContext.jsx'
import Item from '../Component/Item/Item.jsx'
import allproducts from '../Context/Allproducts.jsx'

const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);

  return (
    
    <div className='shop-category'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className='shopcategory-indexSort'>
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className='shopcategory-sort'>
          Sort by <i class="fa-solid fa-caret-down"></i>
        </div>
      </div>
      <div className="shopcategory-products">
        {allproducts.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} details={item.details}/>
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory