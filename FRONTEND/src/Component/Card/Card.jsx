import React from 'react';
import './Card.css';
import Item from '../Item/Item';
import data from '../../ItemCard/Datas.json';

const Card = () => {
  return (
    <div className='card'>
      <div className="h1"><h1>Popular in Mens</h1>
      <hr />
      </div>
      <div className='card-item'>
        {data.map((item, i) => (
          <Item
            key={item.id}
            id={item.id}
            category={item.category}
            title={item.title}
            details={item.details}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
