import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Itemlist from "./Itemlist";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = (item?.card?.info?.defaultPrice || item?.card?.info?.price || 0) / 100;
      return total + itemPrice * (item.quantity || 1);
    }, 0);
  };

  const handleProceedToPay = () => {
    // Navigate to the payment page
    navigate("/payment");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">Your cart is empty.</p>
      ) : (
        <div>
          <button
            className="w-full md:w-auto bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-all mb-4"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <Itemlist items={cartItems} showAddButton={false} />
          <div className="mt-6 border-t pt-4 flex flex-col md:flex-row justify-between items-center">
            <h2 className="text-lg md:text-xl font-semibold">Total:</h2>
            <p className="text-xl md:text-2xl font-bold text-gray-800 mt-2 md:mt-0">
              ₹{calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            className="w-full mt-4 bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all text-base md:text-lg font-semibold"
            onClick={handleProceedToPay}
          >
            Proceed to Pay
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
