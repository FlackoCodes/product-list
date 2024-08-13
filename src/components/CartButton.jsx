import { useSelector, useDispatch } from "react-redux";
import { decreaseItems, increaseItems } from "../store/slices/cartAddSlice";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

export default function Button() {
  const disptach = useDispatch();
  const count = useSelector((state) => state.cart.value);

  return (
    <button className="mt-[-20%] font-bold text-lg bg-red-600 text-white border-[2px] border-red-600 rounded-full py-1 px-3 flex justify-between items-center gap-5">
      <FaMinus
        className="text-white"
        onClick={() => disptach(decreaseItems())}
      />
      {count}
      <FaPlus
        className="text-white"
        onClick={() => disptach(increaseItems())}
      />
    </button>
  );
}
