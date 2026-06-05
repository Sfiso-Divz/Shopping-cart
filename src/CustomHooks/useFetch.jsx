import React, { useEffect, useState } from "react";

function useFetch(url) {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchListOfProducts() {
    setLoading(true);

    try {
      const apiResponse = await fetch(url);
      const result = await apiResponse.json();

      if (result?.products) {
        setLoading(false);
        setProductList(result?.products);
      } else {
        setLoading(false);
        setProductList([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, [url]);

  return {
    productList,
    loading,
  };
}

export default useFetch;
