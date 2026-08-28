/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  // ==================== STATES ====================
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const [cartItems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);

  const url = "http://localhost:4000";

  // ==================== FUNCTIONS ====================

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
    if(token){
      await axios.post(url+"/api/cart/add", {itemId}, {headers:{token}})
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
    if(token){
      await axios.post(url+"/api/cart/remove",{itemId}, {headers:{token}})
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);

        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }

    return totalAmount;
  };

  const fetchFoodList = async ()=> {
    const response = await axios.get(url+"/api/food/list")
    setFoodList(response.data.data)
  }


  const loadCartData = async (token) => {
  if (!token) return;

  const response = await axios.post(
    url + "/api/cart/get",
    {},
    { headers: { token } }
  );

  setCartItems(response.data.cartData || {});
};

  // ==================== EFFECTS ====================

  // ==================== EFFECTS ====================

useEffect(() => {
  if (token) {
    localStorage.setItem("token", token);
    
  } else {
    localStorage.removeItem("token");
  }
}, [token]);

useEffect(() => {
  const loadData = async () => {
    await fetchFoodList();

    if (token) {
      await loadCartData(token);
    }
  };

  loadData();
}, [token]);

  // ==================== CONTEXT VALUE ====================

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };

  // ==================== RETURN ====================

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
