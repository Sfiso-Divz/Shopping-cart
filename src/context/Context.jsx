import { createContext, useEffect, useState } from "react";
import useFetch from "../CustomHooks/useFetch";
import { useNavigate } from "react-router-dom";

export const shoppingContext = createContext(null);

function GlobalShoppingContext({ children }) {
  const { productList, loading, setLoading } = useFetch(
    "https://dummyjson.com/products",
  );
  const [productDetails, setProductDetails] = useState([]);
  const [cartList, setCartlist] = useState([]);
  const navigate = useNavigate();

  // function addToCart(getProductDetails) {
  //   let existingItems = [...cartList];

  //   const findIndexOfCurrentItem = existingItems.findIndex(
  //     (item) => item?.id === getProductDetails?.id,
  //   );

  //   if (findIndexOfCurrentItem === -1) {
  //     existingItems.push({
  //       ...getProductDetails,
  //       quantity: 1,
  //       totalPrice: existingItems?.price,
  //     });
  //   } else {
  //     existingItems[findIndexOfCurrentItem] = {
  //       ...existingItems[findIndexOfCurrentItem],
  //       quantity: existingItems[findIndexOfCurrentItem].quantity + 1,
  //       totalPrice:
  //         (existingItems[findIndexOfCurrentItem].quantity + 1) *
  //         existingItems[findIndexOfCurrentItem].price,
  //     };
  //   }

  //   localStorage.setItem("cartList", JSON.stringify(existingItems));
  //   setCartlist(existingItems);
  //   navigate("/cart");
  // }
  
  function addToCart(getProductDetails) {
  let existingItems = [...cartList];

  const findIndexOfCurrentItem = existingItems.findIndex(
    (item) => item.id === getProductDetails.id
  );

  if (findIndexOfCurrentItem === -1) {
    existingItems.push({
      ...getProductDetails,
      quantity: 1,
      totalPrice: getProductDetails.price,
    });
  } else {
    existingItems[findIndexOfCurrentItem] = {
      ...existingItems[findIndexOfCurrentItem],
      quantity:
        existingItems[findIndexOfCurrentItem].quantity + 1,
      totalPrice:
        (existingItems[findIndexOfCurrentItem].quantity + 1) *
        existingItems[findIndexOfCurrentItem].price,
    };
  }

  localStorage.setItem(
    "cartList",
    JSON.stringify(existingItems)
  );

  setCartlist(existingItems);
  navigate("/cart");
}

  // function removeFromCart(getProductDetails, fullyRemove) {
  //   let existingItems = [...cartList];

  //   const findIndexOfCurrentItem = existingItems.findIndex(
  //     (item) => item?.id === getProductDetails?.id,
  //   );

  //   if (fullyRemove) {
  //     existingItems.splice(existingItems[findIndexOfCurrentItem], 1);
  //   } else {
  //     existingItems[findIndexOfCurrentItem] = {
  //       ...existingItems[findIndexOfCurrentItem],
  //       quantity: existingItems[findIndexOfCurrentItem].quantity - 1,
  //       totalPrice:
  //         (existingItems[findIndexOfCurrentItem].quantity - 1) *
  //         existingItems[findIndexOfCurrentItem].price,
  //     };
  //   }
  //   localStorage.setItem("cartList", JSON.stringify(existingItems));
  //   setCartlist(existingItems);
  // }

  function removeFromCart(getProductDetails, fullyRemove) {
  let existingItems = [...cartList];

  const index = existingItems.findIndex(
    item => item.id === getProductDetails.id
  );

  if (index === -1) return;

  if (fullyRemove) {
    existingItems.splice(index, 1);
  } else {
    existingItems[index] = {
      ...existingItems[index],
      quantity: existingItems[index].quantity - 1,
      totalPrice:
        (existingItems[index].quantity - 1) *
        existingItems[index].price,
    };
  }

  localStorage.setItem(
    "cartList",
    JSON.stringify(existingItems)
  );

  setCartlist(existingItems);
}

  if (loading)
    return (
      <h1 className="flex justify-center items-center h-screen text-2xl font-extrabold">
        Loading...
      </h1>
    );

  return (
    <shoppingContext.Provider
      value={{
        productList,
        loading,
        setLoading,
        addToCart,
        setProductDetails,
        productDetails,
        cartList,
        removeFromCart,
      }}
    >
      {children}
    </shoppingContext.Provider>
  );
}

export default GlobalShoppingContext;
