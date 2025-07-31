import React from 'react'
import "./NewCollection.css"
import { Link } from 'react-router-dom'
import data from './newcollections.jsx'


const NewCollectionitems = ({ title, description, image , price}) => {
  return (
    <div className='collection-item'>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p className='description'>{description}</p>
      <p className='price'>Price : {price} $</p>
      <button className='add-to-cart'>Add to Cart</button>
    </div>
  );
};

export default NewCollectionitems;