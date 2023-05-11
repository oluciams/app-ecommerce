import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  //Shopping Cart Increment quantity
  const [count, setCount] = useState(0)

  //Product Detail Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  //Checkout Side Menu  Open/Close
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  //Product Detail Show product
  const [productToShow, setProductToShow] = useState({})

  //Shopping Cart Show Add products to cart
  const [cartProducts, setCartProducts] = useState([])

  //Shopping Cart Order
  const [order, setOrder] = useState([])

  //get products
  const [items, setItems] = useState(null)
  const [filteredItems, setFilteredItems] = useState(null)

  //get products by title
  const [searchByTitle, setSearchByTitle] = useState(null)

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) => setItems(data))
  }, [])

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  useEffect(() => {
    if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    
  }, [items, searchByTitle]);

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
        cartProducts,
        setCartProducts,
        isCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder,
        items,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

ShoppingCartProvider.propTypes = {
  children: PropTypes.node
}