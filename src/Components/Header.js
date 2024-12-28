import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import imag1 from "../images/logooo.jpg";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md p-4">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo and App Name Section */}
        <div
          className="flex items-center cursor-pointer"
          onClick={handleLogoClick}
        >
          <img className="w-16 h-16 object-contain" src={imag1} alt="Logo" />
          <span className="text-2xl ml-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
            TEST NEPAL
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="w-full mt-4 md:mt-0 md:w-auto">
          <ul className="flex flex-col md:flex-row md:space-x-6 text-lg font-medium text-gray-700">
            <li className="hover:text-red-500">
              <Link to="/" className="block py-2 md:py-0">
                Home
              </Link>
            </li>
            <li className="hover:text-red-500">
              <Link to="/about" className="block py-2 md:py-0">
                About
              </Link>
            </li>
            <li className="hover:text-red-500">
              <Link to="/contact" className="block py-2 md:py-0">
                Contact
              </Link>
            </li>
            <li className="hover:text-red-500 relative">
              <Link to="/cart" className="flex items-center py-2 md:py-0">
                <FaShoppingCart size={24} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white rounded-full text-sm font-bold px-2">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
            {user.name ? (
              <li className="hover:text-red-500">
                <span className="block py-2 md:py-0">Welcome, {user.name}!</span>
              </li>
            ) : (
              <li className="hover:text-red-500">
                <Link
                  to="/login"
                  className="block py-2 md:py-0 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 md:inline"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
