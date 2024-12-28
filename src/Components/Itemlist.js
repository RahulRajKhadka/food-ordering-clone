import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const Itemlist = ({ items, dummy, showAddButton = true }) => {
  console.log(items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    console.log(item);
  };

  return (
    <div className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg space-y-4 sm:space-y-6">
      {items.map((item) => (
        <div
          key={item.card?.info?.id}
          className="flex flex-col sm:flex-row items-start sm:items-center border-b border-gray-200 pb-4 space-y-4 sm:space-y-0 sm:space-x-4"
        >
          {/* Image Section */}
          <div className="relative flex-shrink-0">
            <img
              src={CDN_URL + item.card?.info?.imageId}
              alt={item.card?.info?.name || "No Name"}
              className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg"
            />
            {showAddButton && (
              <button
                className="absolute top-2 right-2 bg-black text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-lg hover:bg-gray-800"
                onClick={() => handleAddItem(item)}
              >
                Add+
              </button>
            )}
          </div>

          {/* Item Details */}
          <div className="flex-grow">
            <h3 className="text-base sm:text-lg font-medium text-gray-900">
              {item.card?.info?.name || "No Name"}
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              {item.card?.info?.description || "No description available"}
            </p>
          </div>

          {/* Item Price */}
          <div className="text-right">
            <span className="text-base sm:text-lg font-semibold text-gray-800">
              ₹{item.card?.info?.price / 100 || item.card?.info?.defaultPrice / 100}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itemlist;
