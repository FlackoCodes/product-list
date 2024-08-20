/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import {
  decreaseItemQtyInCart,
  increaseItemQtyInCart,
} from "../store/slices/cartAddSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import useCart from "../hooks/useCart";

export default function Button({ item }) {
  const dispatch = useDispatch();
  const { cartItems } = useCart();

  const cartItem = cartItems.find((x) => x.id === item.id);

  const handleIncreaseQtyInCart = () => {
    dispatch(increaseItemQtyInCart(item.id));
  };

  const handleDecreaseQtyInCart = () => {
    dispatch(decreaseItemQtyInCart(item.id));
  };

  return (
    <button className="mt-[-20%] font-bold text-lg bg-red-600 text-white border-[2px] border-red-600 rounded-full py-1 px-3 flex justify-between items-center gap-5">
      <FaMinus
        onClick={() => handleDecreaseQtyInCart()}
        className="text-white"
      />
      {cartItem?.qtyToBuy ?? 0}
      <FaPlus
        onClick={() => handleIncreaseQtyInCart()}
        className="text-white"
      />
    </button>
  );
}
