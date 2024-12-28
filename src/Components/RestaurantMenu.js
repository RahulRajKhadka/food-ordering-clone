import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const { restInfo, loading, error } = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null); // Track the currently open category

  // Display loading state
  if (loading) return <Shimmer />;

  // Handle any error during fetch
  if (error) return <h1 className="text-center text-red-500">Error fetching restaurant data!</h1>;

  // If there's no restaurant data, return null
  if (!restInfo) return <h1 className="text-center text-gray-500">No data available</h1>;

  const restaurantInfo = restInfo?.cards?.[2]?.card?.card?.info;
  const { name, cuisines, costForTwoMessage } = restaurantInfo || {};

  const resCategory =
    restInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 text-center">
        <h1 className="text-xl font-bold text-gray-800">{name || "Restaurant Name"}</h1>
        <p className="text-gray-700 mt-2">
          {cuisines?.join(", ") || "Unknown cuisines"} - {costForTwoMessage || "N/A"}
        </p>
      </div>

      {/* Render restaurant categories */}
      {resCategory.map((category, index) => (
        <RestaurantCategory
          key={category.card.card.title}
          data={category?.card?.card}
          ShowItems={index === showIndex} // Determine if this category is open
          setShowIndex={() => setShowIndex(index === showIndex ? null : index)} // Toggle index
        />
      ))}
    </div>
  );
};
