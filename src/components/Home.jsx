import { useState } from "react";
import data from "../data";
import emptyCart from "../images/illustration-empty-cart.svg";

export default function Home() {
  const [cart, setCart] = useState(0);
  return (
    <>
      <div className="my-10 grid lg:grid-cols-[3fr_1fr] gap-x-5 md:grid-cols-[2fr_1fr]">
        <div>
          <div>
            <h1 className="text-3xl font-bold text-zinc-900 mb-4">Desserts</h1>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
            {data.map((data, index) => (
              <div key={index}>
                <picture className="relative">
                  <source
                    media="(min-width: 1020px)"
                    srcSet={data.image.desktop}
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet={data.image.tablet}
                  />
                  <img
                    className="rounded-md mb-4"
                    src={data?.image.mobile || data?.image.thumbnail}
                    alt={data.name}
                  />
                  <div className="flex justify-center mb-2">
                    <button className="mt-[-15%] font-bold text-lg bg-white border-[2px] border-red-800 rounded-full py-1 px-3">
                      add to cart
                    </button>
                  </div>
                </picture>
                <div>
                  <p className="font-semibold text-stone-700">
                    {data.category}
                  </p>
                  <p className="font-extrabold text-stone-800">{data.name}</p>
                  <p className="font-bold text-orange-800">{`$${data.price}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-md w-fit mt-4">
          <div className="bg-white p-5 rounded-sm">
            <h2 className="mt-3 font-bold text-2xl text-orange-800 capitalize">
              your cart ({cart})
            </h2>
            <div className="flex flex-col items-center justify-center gap-2">
              <img src={emptyCart} alt="empty cart" />
              <p className="tetx-center text-sm font-semibold text-stone-600">
                Your added items will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
