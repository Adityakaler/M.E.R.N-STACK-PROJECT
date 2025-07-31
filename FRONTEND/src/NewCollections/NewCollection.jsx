import React from 'react'
import './NewCollection.css'
import data from './newcollections.jsx'
import NewCollectionitems from './NewCollectionitems.jsx'

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>New Collection</h1>
      <hr />
      <div className='collections'>
        {data.map((item, i) => (
          <NewCollectionitems
            key={i}
            title={item.name}
            description={item.details}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default NewCollection