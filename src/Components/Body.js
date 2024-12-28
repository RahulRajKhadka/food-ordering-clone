import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { APP_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch(APP_API);
        const data = await response.json();
        const fetchedRestaurants =
          data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setRestaurants(fetchedRestaurants);
        setFilteredRestaurants(fetchedRestaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchRestaurants();
  }, []);

  if (!onlineStatus) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
        <h1 className="text-2xl font-bold text-red-500">You are offline!</h1>
        <p className="text-gray-600 mt-2">Please check your internet connection.</p>
      </div>
    );
  }

  const handleSearch = () => {
    const query = searchText.toLowerCase().trim();
    if (!query) {
      setFilteredRestaurants(restaurants);
    } else {
      const filtered = restaurants.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(query)
      );
      setFilteredRestaurants(filtered);
    }
  };

  const filterTopRated = () => {
    const topRated = restaurants.filter((restaurant) => restaurant.info.avgRating > 4.5);
    setFilteredRestaurants(topRated);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  if (!restaurants.length) {
    return <Shimmer />;
  }

  return (
    <div className="p-4">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 bg-white p-4 rounded-lg shadow-md space-y-4 sm:space-y-0">
        {/* Search Input */}
        <div className="flex items-center w-full sm:w-auto">
          <input
            type="text"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto focus:ring-2 focus:ring-blue-400 focus:outline-none"
            placeholder="Search restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        {/* Filter Button */}
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
          onClick={filterTopRated}
        >
          Top Rated
        </button>
      </div>

      {/* Restaurant Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={`/restaurants/${restaurant.info.id}`}
              className="hover:no-underline"
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">No restaurants found.</p>
        )}
      </div>
    </div>
  );
};

export default Body;
