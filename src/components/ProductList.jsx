import React, { useContext } from "react";
import { shoppingContext } from "../context/Context";
import ProductTile from "./ProductTile";

function ProductList() {
  const { productList } = useContext(shoppingContext);

  return (
    <div className=" py-2 px-8 max-w-7xl mx-auto">
      <div className="flex justify-center mt-12">
        <h1 className="text-gray-900 text-2xl font-extrabold sm:text-3xl">Our Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-2 sm:py-12 lg:py-20 gap-8 mt-4">
        {productList && productList.length > 0 ? (
          productList.map((product) => <ProductTile key={product?.id} product={product} />)
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>
    </div>
  );
}

export default ProductList;
