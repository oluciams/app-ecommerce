import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  //Shopping Cart Increment quantity  
  const [count, setCount] = useState(0);

  //Product Detail Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false);

  //Product Detail Show product
  const [productToShow, setProductToShow] = useState({});

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node
}