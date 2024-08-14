import { useState } from "react";
import data from "../data";
import emptyCart from "../images/illustration-empty-cart.svg";
import Button from "./cartButton";
import AddButton from "./AddButton";
import { CgShoppingCart } from "react-icons/cg";

export default function Home() {
  const [totalCart, setTotalCart] = useState(0);
  const [cart, setCart] = useState([]);
  const [clickedIndex, setClickedIndex] = useState(null);

  // const handleClick = (index) => {
  //   setClickedIndex((prevIndex) => (prevIndex === index ? null : index));
  // };

  const addItemToCart = (currentItem) => {
    console.log("Attempting to add to cart", currentItem);

    const itemExists = cart.some((item) => item.id === currentItem.id);

    if (!itemExists) {
      setCart((prevCart) => [...prevCart, currentItem]);
      setTotalCart((prevTotal) => prevTotal + 1);
      console.log("Added to cart", currentItem);
    } else {
      console.log("Item already in cart", currentItem);
    }
  };

  console.log(cart);

  return (
    <>
      <div className="my-10 grid lg:grid-cols-[3fr_1fr] gap-x-5 md:grid-cols-[2fr_1fr]">
        <div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 mb-4">Desserts</h1>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
            {data.map((item) => (
              <div key={item.id}>
                <picture className="relative">
                  <source
                    media="(min-width: 1020px)"
                    srcSet={item.image.desktop}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={item.image.tablet}
                  />
                  <img
                    className="rounded-md mb-4"
                    src={item.image.mobile || item.image.thumbnail}
                    alt={item.name}
                  />
                  <div className="flex justify-center mb-2">
                    {/* {clickedIndex === index ? (
                      <Button handleClick={() => handleClick(index)} />
                    ) : (
                      <AddButton addItemToCart={() => addItemToCart(item)} />
                    )} */}
                    <button
                      onClick={() => addItemToCart(item)}
                      className="mt-[-20%] font-bold text-lg bg-white border-[2px] border-red-800 rounded-full py-1 px-3 flex justify-between items-center gap-1"
                    >
                      <CgShoppingCart className="text-orange-700 text-xl" />
                      Add to Cart
                    </button>
                  </div>
                </picture>
                <div>
                  <p className="font-semibold text-stone-700">
                    {item.category}
                  </p>
                  <p className="font-extrabold text-stone-800">{item.name}</p>
                  <p className="font-bold text-orange-800">{`$${item.price}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md w-fit mt-4">
          <div className="bg-white p-5 rounded-sm">
            <h2 className="mt-3 font-bold text-2xl text-orange-800 capitalize">
              your cart ({totalCart})
            </h2>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={emptyCart} alt="empty cart" />
              <p className="text-center text-sm font-semibold text-stone-600">
                Your added items will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
