import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

// dev-omv8mcgq.us.auth0.com
// 4o7bnYi7kNAjeg9lYETkvLrnDdIshSFA

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-omv8mcgq.us.auth0.com"
      clientId="4o7bnYi7kNAjeg9lYETkvLrnDdIshSFA"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <UserProvider>
        <ProductsProvider>
          <FilterProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </FilterProvider>
        </ProductsProvider>
      </UserProvider>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
