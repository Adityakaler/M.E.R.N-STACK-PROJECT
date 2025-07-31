import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import Hero from './Component/Navbar/Hero/Hero.jsx';
import ShopContextProvider from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
    <ShopContextProvider>
      <App />
      <NameForm />
    </ShopContextProvider>
  </StrictMode>

   
);

