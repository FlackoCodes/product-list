/* eslint-disable react/prop-types */
import orderConfirmed from "../images/icon-order-confirmed.svg";
export default function ModalPopup({ cart, total, startNewOrder }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="flex flex-col bg-white rounded-sm p-4 md:max-w-[500px] mx-4">
        <div>
          <img src={orderConfirmed} alt="order confirmed" />
        </div>
        <div>
          <h2 className="font-bold text-2xl text-red-950 capitalize">
            Order Confirmed
          </h2>
          <p className="font-bold text-sm text-[rgba(206,185,185,0.86)] my-2">
            We hope you enjoy your food!
          </p>
        </div>
        <div className="bg-[antiquewhite] rounded-sm px-4">
          {cart.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between gap-4 items-center align-middle my-2">
                <div className="flex gap-2">
                  <div>
                    <img
                      className="rounded-sm w-14 h-14 block"
                      src={item.image.thumbnail}
                      alt={item.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-red-950 text-lg font-bold">
                      {item.name}
                    </h3>
                    <div className="flex gap-3 items-center">
                      <span className="fot-bold text-red-500 text-xl">1x</span>
                      <p className="text-[burlywood]">{`@${item.price}`}</p>
                    </div>
                    {/* <p className="text-red-200 font-bold">{item.price}</p> */}
                  </div>
                </div>
                <span className="font-bold text-lg">{`$${item.price}`}</span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between">
            <h4 className="text-red-100 font-bold text-sm"></h4>
            <p className="font-bold text-2xl text-red-950">{`$${total}`}</p>
          </div>
        </div>
        <button
          onClick={startNewOrder}
          className="w-full px-4 py-2 bg-red-700 border-none rounded-full text-white capitalize font-bold text-lg my-4"
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
