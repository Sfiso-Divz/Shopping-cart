import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { shoppingContext } from "../context/Context";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart, productDetails, setProductDetails } =
    useContext(shoppingContext);

  async function fetchProductDetails() {
    try {
      const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);

      const result = await apiResponse.json();

      setProductDetails(result);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 py-2 sm:py-4 lg:py-12 px-4 sm:px-6 lg:px-8">
        {/* {productDetails ? (
          <>
            <div className="lg:col-span-2 py-2 px-6">
              <img src={productDetails.thumbnail} alt={productDetails.title} />
              <div className="flex items-center py-4 px-6">
                <div className="flex gap-2 lg:gap-8 mb-4">
                  {productDetails?.images &&
                  productDetails?.images?.length > 0 ? (
                    productDetails?.images?.map((image) => 
                    <div className="w-20 ">
                      <img  src={image} alt={image.title} />
                    </div>
                  )
                  ) : (
                    null
                  )}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 lg:pr-12">
              <div className="flex flex-col justify-center h-full px-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-800 font-extrabold">
                    {productDetails.title}
                  </h2>
                  <h2 className="text-gray-800 font-extralight">
                    R{productDetails.price}
                  </h2>
                </div>
                <div className="mt-12">
                  <p>{productDetails.description}</p>
                </div>
                <div className="mt-12 flex justify-center mb-6">
                  <div>
                    <button onClick={()=> addToCart(productDetails)} className="bg-gray-900 text-white py-4 px-8 rounded-md cursor-pointer">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h3>Loading Product Info...</h3>
        )} */}

        {productDetails ? (
          <>
            <div className="lg:col-span-2 py-2 px-6">
              <img
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
                className="rounded-md"
              />

              <div className="flex flex-wrap gap-2 mt-4">
                {productDetails?.images?.map((image, index) => (
                  <div key={index} className="w-20">
                    <img
                      src={image}
                      alt="product view"
                      className="rounded-md"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3 lg:pr-12">
              <div className="flex flex-col justify-center h-full px-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-gray-800 font-extrabold">
                    {productDetails?.title}
                  </h2>

                  <h2 className="text-gray-800 font-light">
                    R{productDetails?.price}
                  </h2>
                </div>

                <p className="mt-12">{productDetails?.description}</p>

                <div className="mt-12 flex justify-center">
                  <button
                    onClick={() => addToCart(productDetails)}
                    className="bg-gray-900 text-white py-4 px-8 rounded-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h3>Loading Product Info...</h3>
        )}
      </div>
    </div>
  );
}

export default ProductDetails;
