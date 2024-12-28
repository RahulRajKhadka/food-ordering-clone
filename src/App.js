import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import { Error } from "./Components/Error";
import { Contact } from "./Components/Contact";
import { RestaurantMenu } from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/Cart";
import { Login } from "./Components/Login";
import PaymentPage from "./Components/PaymentPage"; // Import the new PaymentPage component

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <div className="app">
        <Header />
        <Outlet /> {/* This is where nested routes will be rendered */}
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // AppLayout is used for the common layout
    children: [
      {
        path: "/", // Home route
        element: <Body />,
      },
      {
        path: "about", // About route
        element: <About />,
      },
      {
        path: "contact", // Contact route
        element: <Contact />,
      },
      {
        path: "restaurants/:resId", // Dynamic route for restaurants
        element: <RestaurantMenu />,
      },
      {
        path: "cart", // Cart route
        element: <Cart />,
      },
      {
        path: "login", // Login route
        element: <Login />,
      },
      {
        path: "payment", // Payment route
        element: <PaymentPage />, // Add PaymentPage as the element for the payment route
      },
    ],
    errorElement: <Error />, // Fallback UI for errors
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
