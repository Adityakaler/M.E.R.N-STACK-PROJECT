import React, { createContext, useState } from 'react';
import allproducts from './Allproducts.jsx'; 

const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const products = allproducts;

  return (
    <ShopContext.Provider value={{ products }}>
      {children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
export { ShopContext };
