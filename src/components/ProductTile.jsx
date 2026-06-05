import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProductTile({ product }) {

    const navigate = useNavigate()


    function handleNavigateToProductDetails(getProductId){
        navigate(`/product-details/${getProductId}`)
    }

  return (
    <div key={product?.id} className="border border-gray-800 py-2 px-4">
      <div className="">
        <img className="hover:scale-110 transition-all duration-300" src={product?.thumbnail} alt={product?.title} />
        <div className="flex justify-between mt-4 items-center">
          <h2 className="text-sm font-extrabold w-40 text-ellipsis whitespace-nowrap overflow-hidden">
            {product?.title}
          </h2>
          <p>R{product?.price}</p>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={()=> handleNavigateToProductDetails(product?.id)} className="bg-gray-800 text-white py-2 px-4 mt-8 mb-4 cursor-pointer">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductTile;
