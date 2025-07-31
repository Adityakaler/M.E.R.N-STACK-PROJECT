import React from 'react'
import "./Item.css"
import { Link } from 'react-router-dom'
const Item = ({ title, details, image , price,id}) => {
  return (
    <div className='Shoes'>
      <Link to={`/product/${id}`} className="image-link">
        <img src={image} alt={title} />
      </Link>
      <h1>{title}</h1>
      <p>{details}</p>
      <p>Price : {price} $</p>
      <button className='add-to-cart'>Add to Cart</button>
    </div>
  );
};

export default Item;