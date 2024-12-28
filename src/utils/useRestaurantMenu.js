import { useEffect, useState } from "react";
import { MENU_API } from "./constants"; // Make sure MENU_API is properly defined in constants.

export const useRestaurantMenu = (resId) => {
  const [restInfo, setResInfo] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track error state

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true); // Set loading to true before fetching
      try {
        const response = await fetch(`${MENU_API}${resId}`); // Correct URL concatenation
        const json = await response.json();
        setResInfo(json.data); // Set the response data
        setLoading(false); // Set loading to false after data is fetched
      } catch (err) {
        setError(err); // Set error if fetch fails
        setLoading(false);
      }
    };

    fetchMenu();
  }, [resId]); // Dependency array, will re-fetch if resId changes

  return { restInfo, loading, error };
};
