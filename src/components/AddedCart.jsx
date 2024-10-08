/* eslint-disable react/prop-types */
import delFromCart from "../images/icon-remove-item.svg";
import iconCarbon from "../images/icon-carbon-neutral.svg";
import { useState } from "react";
import ModalPopup from "./ModalPopup";
import useCart from "../hooks/useCart";

export default function AddedCart({ cart, removeItem }) {
  const { totalPrice } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleStartNewOrder = () => {
    closeModal();
  };

  return (
    <div className="flex flex-col p-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center py-2 border-b border-gray-300"
        >
          <div className="flex items-center justify-between gap-4 space-x-4">
            {/* Optional image display */}
            {/* <img
              src={item.image.thumbnail}
              alt={item.name}
              className="w-12 h-12 object-cover rounded"
            /> */}
            <div className="">
              <h2 className="font-bold text-md text-black">{item.name}</h2>
              <div className="flex space-x-2 justify-between">
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-600">${item?.price * item?.qtyToBuy}</p>
              </div>
            </div>
          </div>
          <img
            onClick={() => removeItem(item)} // Pass the specific item here
            src={delFromCart}
            alt="remove from cart"
            className="cursor-pointer"
          />
        </div>
      ))}

      <div className="flex flex-col mt-4 p-2 border-t border-gray-300">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-600 font-semibold text-lg capitalize">
            Order Total
          </p>
          <p className="text-lg font-bold text-amber-900">${totalPrice}</p>
        </div>
        <div className="bg-amber-100 flex items-center rounded-lg py-4 px-2">
          <img src={iconCarbon} alt="carbon-icon" />
          <p className="font-semibold text-sm text-stone-400">
            This is a
            <span className="text-red-950 font-semibold"> carbon-neutral</span>{" "}
            delivery
          </p>
        </div>
        <button
          onClick={openModal}
          className="border-none bg-red-800 py-2 px-4 text-center text-lg font-bold text-white rounded-full my-3"
        >
          Confirm Order
        </button>
      </div>

      {isModalOpen && (
        <ModalPopup
          cart={cart}
          total={totalPrice.toFixed(2)} // Pass formatted total price
          startNewOrder={handleStartNewOrder}
        />
      )}
    </div>
  );
}
