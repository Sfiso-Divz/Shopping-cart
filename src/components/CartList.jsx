import React, { useContext } from "react";
import { shoppingContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function CartList() {
  const { cartList, addToCart, removeFromCart } = useContext(shoppingContext);
  const navigate = useNavigate();

  function handleNavigateToProducts() {
    navigate("/product-list");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-3">
          {cartList?.length > 0 ? (
            cartList.map((cartItem) => (
              <div
                key={cartItem.id}
                className="flex flex-col sm:flex-row gap-4 border rounded-lg p-4 mb-4 shadow-sm"
              >
                <div className="w-full sm:w-40 shrink-0">
                  <img
                    src={cartItem?.thumbnail}
                    alt={cartItem?.title}
                    className="w-full h-40 object-cover rounded-md"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row justify-between">
                    <h2 className="font-bold text-lg">{cartItem?.title}</h2>

                    <button
                      onClick={() => removeFromCart(cartItem, true)}
                      className="bg-black text-white px-4 py-2 rounded mt-2 sm:mt-0"
                    >
                      Remove
                    </button>
                  </div>

                  <p className="text-gray-600 mt-2">{cartItem?.description}</p>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
                    <div className="flex items-center gap-2">
                      <button
                        disabled={cartItem.quantity === 1}
                        onClick={() => removeFromCart(cartItem, false)}
                        className="border px-3 py-1 rounded disabled:opacity-50"
                      >
                        -
                      </button>

                      <span className="border px-4 py-1 rounded">
                        {cartItem.quantity}
                      </span>

                      <button
                        onClick={() => addToCart(cartItem)}
                        className="border px-3 py-1 rounded"
                      >
                        +
                      </button>
                    </div>

                    <p className="font-bold text-lg mt-3 sm:mt-0">
                      R{(cartItem.price * cartItem.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3 className="text-center text-xl">No Items In Cart</h3>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-gray-100 rounded-lg p-6 shadow sticky top-6">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

            <div className="space-y-3">
              <p>
                Total Items:{" "}
                {cartList.reduce((acc, item) => acc + item.quantity, 0)}
              </p>

              <p className="font-bold text-xl">
                Total Price: R
                {cartList
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col gap-3 mt-6">
              <button className="bg-black text-white py-3 rounded">
                Checkout
              </button>

              <button
                onClick={handleNavigateToProducts}
                className="border border-black py-3 rounded"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartList;
