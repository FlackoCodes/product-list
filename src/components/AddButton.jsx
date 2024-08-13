import { CgShoppingCart } from "react-icons/cg";

export default function AddButton({ handleClick }) {
  return (
    <div>
      <button
        onClick={handleClick}
        className="mt-[-20%] font-bold text-lg bg-white border-[2px] border-red-800 rounded-full py-1 px-3 flex justify-between items-center gap-1"
      >
        <CgShoppingCart className="text-orange-700 text-xl" />
        Add to Cart
      </button>
    </div>
  );
}
