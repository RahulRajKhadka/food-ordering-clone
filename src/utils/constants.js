export const CDN_URL=  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
// Add CORS proxy URL
const CORS_PROXY = "https://proxy.cors.sh/";

// Update the API endpoints with the CORS proxy
export const MENU_API = `${CORS_PROXY}https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=`;

export const APP_API = `${CORS_PROXY}https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
