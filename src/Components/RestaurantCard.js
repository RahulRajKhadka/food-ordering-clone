import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData.info;

  return (
    <div className="m-4 p-4 w-[300px] bg-white shadow-lg hover:shadow-2xl rounded-lg transform hover:scale-105 transition-all duration-300 ease-in-out">
      {/* Image */}
      <img
        className="rounded-t-lg w-full h-40 object-cover"
        src={CDN_URL + cloudinaryImageId}
        alt={`${name} Image`}
      />
      {/* Content */}
      <div className="py-4 px-2">
        <h3 className="font-bold text-xl text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 mt-1 truncate">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between mt-3 text-sm text-gray-700">
          <span className={`font-semibold ${avgRating >= 4 ? 'text-green-500' : 'text-orange-500'}`}>
            {avgRating} ⭐
          </span>
          <span>{sla.deliveryTime} mins</span>
        </div>
        <p className="mt-2 text-gray-800 font-medium">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
