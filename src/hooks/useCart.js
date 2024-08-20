import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  clearCart,
  increaseItemQtyInCart,
  removeFromCart,
} from "../store/slices/cartAddSlice";

const useCart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state?.cart?.cart);

  const addToCart = (product) => {
    return dispatch(addItemToCart(product));
  };

  const removeItemFromCart = (product) => {
    return dispatch(removeFromCart(product));
  };

  const clrCart = (id) => {
    return dispatch(clearCart(id));
  };

  const increaseQtyInCart = (id) => {
    return dispatch(increaseItemQtyInCart(id));
  };

  const decreaseQtyInCart = () => {};

  const totalPrice = Number(
    cartItems?.reduce(
      (acc, item) => acc + item.qtyToBuy * Number(item?.price),
      0
    )
  );

  return {
    addToCart,
    removeItemFromCart,
    clrCart,
    increaseQtyInCart,
    decreaseQtyInCart,
    cartItems: cartItems ?? [],
    totalPrice,
  };
};

export default useCart;
