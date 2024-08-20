import { CgShoppingCart } from "react-icons/cg";
import useCart from "../hooks/useCart";

// eslint-disable-next-line react/prop-types
export default function AddButton({ item }) {
  const { addToCart } = useCart();
  return (
    <div>
      <button
        onClick={() => addToCart(item)}
        className="mt-[-20%] font-bold text-lg bg-white border-[2px] border-red-800 rounded-full py-1 px-3 flex justify-between items-center gap-1"
      >
        <CgShoppingCart className="text-orange-700 text-xl" />
        Add to Cart
      </button>
    </div>
  );
}
