// import { useState } from "react";
import data from "../data";
import Button from "./cartButton";
import AddButton from "./AddButton";
import Cart from "./EmptyCart";
import AddedCart from "./AddedCart";
import { useSelector } from "react-redux";

export default function Home() {
  const cart = useSelector((state) => state.cart.cart);
  const totalCart = useSelector((state) => state.cart.totalCart);

  const existsInCart = (currentItem) => {
    return cart.some((item) => item.id === currentItem.id);
  };

  return (
    <div className="my-10 grid lg:grid-cols-[2.8fr_1.2fr] gap-x-5 md:grid-cols-[2fr_1fr]">
      <div>
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 mb-4">Desserts</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
          {data?.map((item) => (
            <div key={item.id}>
              <picture className="relative">
                <source
                  media="(min-width: 1020px)"
                  srcSet={item.image.desktop}
                />
                <source media="(min-width: 768px)" srcSet={item.image.tablet} />
                <img
                  className="rounded-md mb-4"
                  src={item.image.mobile}
                  alt={item.name}
                />
                <div className="flex justify-center mb-2">
                  {existsInCart(item) ? (
                    <Button item={item} />
                  ) : (
                    <AddButton item={item} />
                  )}
                </div>
              </picture>
              <div>
                <p className="font-semibold text-stone-700">{item.category}</p>
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
          <div className="flex flex-col items-center justify-center gap-1">
            {cart.length ? <AddedCart cart={cart} /> : <Cart />}
          </div>
        </div>
      </div>
    </div>
  );
}
