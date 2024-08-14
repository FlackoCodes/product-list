import { useDispatch, useSelector } from "react-redux";
import { decreaseItems, increaseItems } from "../store/slices/cartAddSlice";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Button({ handleClick }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.cart.value);

  // Call the addToCart function passed as a prop
  return (
    <button
      onClick={handleClick}
      className="mt-[-20%] font-bold text-lg bg-red-600 text-white border-[2px] border-red-600 rounded-full py-1 px-3 flex justify-between items-center gap-5"
    >
      <FaMinus
        className="text-white"
        onClick={(e) => {
          e.stopPropagation(); // Prevents this click from bubbling up
          dispatch(decreaseItems());
        }}
      />
      {count}
      <FaPlus
        className="text-white"
        onClick={(e) => {
          e.stopPropagation(); // Prevents this click from bubbling up
          dispatch(increaseItems());
        }}
      />
    </button>
  );
}
