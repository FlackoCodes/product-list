import emptyCart from "../images/illustration-empty-cart.svg";

export default function Cart() {
  return (
    <>
      <img src={emptyCart} alt="empty cart" />
      <p className="text-center text-sm font-semibold text-stone-600">
        Your added items will appear here
      </p>
    </>
  );
}
